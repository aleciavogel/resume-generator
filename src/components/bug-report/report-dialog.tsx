import type { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBug } from '@fortawesome/pro-regular-svg-icons'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const ReportDialog: FC = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="text-gray-600 flex flex-row items-center space-x-2">
          <FontAwesomeIcon icon={faBug} className="h-5 w-5" />
          <span className="ml-2">Report a Bug</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Report a bug</DialogTitle>
          <DialogDescription>
            Is something looking a little off? Let me know and I&apos;ll fix it as soon as I can.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="">
            <Label htmlFor="name">Name</Label>
            <Input id="name" />
          </div>
          <div className="">
            <Label htmlFor="name">Email</Label>
            <Input id="email" />
          </div>
          <div className="">
            <Label htmlFor="username" className="text-right">
              Description of what happened
            </Label>
            <Textarea id="description" className="" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Submit Report</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default ReportDialog
