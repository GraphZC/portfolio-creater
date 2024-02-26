import { NextResponse } from "next/server";
import prisma from "@/lib/prisma/db";

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    const id = params.id;

    const project = await prisma.project.findUnique({
        where: {
            id
        }
    });

    if (!project) {
        return NextResponse.json({
            message: 'Project not found'
        }, {
            status: 404
        })
    }

    return NextResponse.json(project);
}