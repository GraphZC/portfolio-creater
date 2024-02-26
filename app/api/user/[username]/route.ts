import { NextResponse } from "next/server";
import prisma from "@/lib/prisma/db";
import { UpdateUserValidation } from "@/validation/userValidation";
import { ZodError } from "zod";

export async function GET(
    request: Request,
    { params }: { params: { username: string } }
) {
    const username = params.username;

    const user = await prisma.user.findUnique({
        where: {
            username
        },
        include: {
            projects: true,
            social: true
        }
    });

    if (!user) {
        return NextResponse.json({ 
            error: 'User not found' 
        }, { 
            status: 404 
        });
    }

    return NextResponse.json(user);
}

export async function PUT(
    request: Request,
    { params }: { params: { username: string } }
) {
    try {
        const json = await request.json();

        const payload = UpdateUserValidation.parse(json);

        const username = params.username;

        const user = await prisma.user.update({
            where: {
                username
            },
            data: {
                ...payload
            }
        });

        return NextResponse.json(user);
    } catch (error) {
        if (error instanceof ZodError) {
            return NextResponse.json({
                message: error.message,
                errors: error.errors
            }, {
                status: 400
            })
        } 
    }
}