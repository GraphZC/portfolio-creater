import { CreateProjectValidation } from "@/validation/projectValidation";
import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";
import prisma from "@/lib/prisma/db";

export async function POST(
    request: NextRequest,
) {
    try {
        const json = await request.json();

        const payload = CreateProjectValidation.parse(json);

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