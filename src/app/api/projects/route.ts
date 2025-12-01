import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'data', 'data.json');
    const jsonData = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(jsonData);
    
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: 'Failed to load projects' }, { status: 500 });
  }
}
