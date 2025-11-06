"use client"

import React from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

type ResumeModalProps = {
  trigger: React.ReactNode
}

export function ResumeModal({ trigger }: ResumeModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      {/* Make dialog wider and taller for easier reading; use flex to let the preview fill available space */}
      <DialogContent className="max-w-6xl w-full sm:max-w-5xl lg:max-w-7xl h-[90vh] p-4 flex flex-col">
        <DialogHeader>
          <DialogTitle>Resume</DialogTitle>
          <DialogDescription>Preview my resume below — you can download it with the button.</DialogDescription>
        </DialogHeader>

        <div className="mt-2 w-full flex-1 flex flex-col">
          {/* Embedded PDF preview. Place your PDF at /public/resume.pdf */}
          <div className="w-full flex-1 bg-muted rounded-md overflow-hidden">
            <iframe
              src="/resume.pdf"
              title="Resume Preview"
              className="w-full h-full"
            />
          </div>

          <p className="text-sm text-muted-foreground mt-3">
            If the preview doesn't load, you can download the file directly.
          </p>
        </div>

        <DialogFooter className="mt-4 flex-none">
          {/* Removed 'Open' button per request; keep Download only and increase prominence */}
          <Button className="ml-0 w-full sm:w-auto" size="lg" asChild>
            <a href="/resume.pdf" download>
              Download Resume
            </a>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}