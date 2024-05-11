import { deleteModel } from '@/app/service/deleteRequest'
import { getCookie } from '@/app/utils/cookies'
import { NextResponse } from 'next/server'

export async function DELETE(request: Request): Promise<NextResponse> {
  const accessToken = getCookie(request, 'accessToken')
  const { searchParams } = new URL(request.url)

  const modelId = searchParams.get('modelId') || ''

  const data = await deleteModel(accessToken, modelId)
  return NextResponse.json(data)
}
