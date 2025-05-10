"use client"

export default function LocalTimeString({createdAt}: {createdAt: Date}) {
  return (
    <>
    {new Date(createdAt).toLocaleString()}
    </>
  )
}
