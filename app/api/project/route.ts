import { CreateProjectValidation } from "@/validation/projectValidation";
import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";
import prisma from "@/lib/prisma/db";
import { writeFile } from 'fs/promises'

export async function POST(
    request: NextRequest,
) {
    try {
        const formData = await request.formData();

        const payload = CreateProjectValidation.parse({
            userId: formData.get('userId'),
            name: formData.get('name'),
            type: formData.get('type'),
            description: formData.get('description'),
            sourceUrl: formData.get('sourceUrl'),
            demoUrl: formData.get('demoUrl'),
            image: formData.get('image')
        });

        // Upload image to /public/upload
        const image = formData.get('image') as unknown as File;
        if (!image) {
            return NextResponse.json({ error: "No files received." }, { status: 400 });
        }


        const bytes = await image.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const filename = image.name.split('.').slice(0, -1).join('.');
        const fileExtension = image.name.split('.').pop();
        const uploadFilename = `${filename}-${Date.now()}.${fileExtension}`;

        const path = `public/upload/${uploadFilename}`;
        await writeFile(path, buffer)

        const project = await prisma.project.create({
            data: {
                name: payload.name,
                type: payload.type,
                userId: payload.userId,
                description: payload.description,
                sourceUrl: payload.sourceUrl,
                demoUrl: payload.demoUrl,
            }  
        });

        const projectImage = await prisma.projectImage.create({
            data: {
                projectId: project.id,
                url: '/' + path.replace('public/', '')
            }
        })

        return NextResponse.json({
            ...project
        }, {
            status: 201
        })
    } catch (error) {
        if (error instanceof ZodError) {
            return NextResponse.json({
                message: error.message,
                errors: error.errors
            }, {
                status: 400
            })
        } else {
            return NextResponse.json({
                message: 'Internal Server Error'
            }, {
                status: 500
            })
        }
    }


} 