import { Trash } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

export function DialogCloseButton(props: any) {
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    // Close the dialog
    setOpen(false);
    // Perform delete action
    props.handleDelete(props?.id);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        asChild
        className="pl-[6px] cursor-pointer hover:bg-gray-100 rounded-sm"
      >
        <p className="flex  items-center py-2">
          <Trash className="mr-2 text-brand-icon" />
          <span>Delete</span>
        </p>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md rouned-sm">
        <DialogHeader>
          <DialogTitle className="w-full">Delete Confirmation</DialogTitle>
          <DialogDescription>
            This action can not be undone. Are you sure you want to permenantly
            delete ?
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2"></div>
        <DialogFooter className="">
          <DialogClose className="w-full">
            <Button
              type="button"
              variant="secondary"
              className="w-full rounded-sm"
            >
              Cancel
            </Button>
          </DialogClose>
          <DialogClose className="w-full">
            <Button
              onClick={handleDelete}
              type="button"
              variant="destructive"
              className="w-full rounded-sm"
            >
              Delete
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
