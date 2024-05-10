import { deletePostAdmin } from '@/app/service/deleteRequest'
import { getCookie } from '@/app/utils/cookies'
import { NextResponse } from 'next/server'

export async function DELETE(request: Request): Promise<NextResponse> {
  const accessToken = getCookie(request, 'accessToken')
  const { searchParams } = new URL(request.url)
  const postId = searchParams.get('postId') || ''
  console.log(postId,'로 게시물 삭제 요청');
  
  const data = await deletePostAdmin(accessToken, postId)
  return NextResponse.json(data)
}
