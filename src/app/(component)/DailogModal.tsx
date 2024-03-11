import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
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

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger
          asChild
          className="pl-[6px] cursor-pointer hover:bg-gray-100 rounded-sm"
        >
          <p className="flex items-center py-2">
            <Trash className="mr-2 text-brand-icon" />
            <span>Delete</span>
          </p>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md rouned-sm">
          <DialogHeader>
            <DialogTitle className="w-full">Delete Confirmation</DialogTitle>
            <DialogDescription>
              This action cannot be undone. Are you sure you want to permanently
              delete?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="">
            <Button
              type="button"
              variant="secondary"
              className="w-full rounded-sm"
              onClick={() => setOpen(false)} // Close the dialog
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              className="w-full rounded-sm"
              onClick={async () => {
                props.handleDelete(props.id);
                setOpen(false);
              }}
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
