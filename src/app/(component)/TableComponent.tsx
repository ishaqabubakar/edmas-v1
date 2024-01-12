import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoreHorizontal } from "lucide-react";
import PaginationDemo from "./Pagination";

const TableComponent = () => {
  return (
    <div className="w-full rounded-sm h-fit bg-white border p-0">
      <Table className=" bg-white w-full border-b">
        <TableHeader className="rounded-sm">
          <TableRow>
            <TableHead className="w-[50px]">
            <Input type="checkbox" className="text-[14px] w-[16px]" />
            </TableHead>
            <TableHead>Name</TableHead>
            <TableHead>School</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="h-[30px]">
            <TableCell>
              <Input type="checkbox" className="text-[14px] w-[16px]" />
            </TableCell>
            <TableCell>Ishaq Abubakar</TableCell>
            <TableCell>GitComplex</TableCell>
            <TableCell>gitcomplex@gmail.com</TableCell>
            <TableCell>Lapaz, Nyamekeye</TableCell>
            <TableCell className="font-Medium text-[16px] w-[50px]">
            <MoreHorizontal className="text-gray-500"/>
            </TableCell>
          </TableRow>
          <TableRow className="h-[30px]">
            <TableCell>
            <Input type="checkbox" className="text-[14px] w-[16px]" />
            </TableCell>
            <TableCell>Ishaq Abubakar</TableCell>
            <TableCell>GitComplex</TableCell>
            <TableCell>gitcomplex@gmail.com</TableCell>
            <TableCell>Lapaz, Nyamekeye</TableCell>
            <TableCell className="font-Medium text-[20px] w-[50px] text-center">
            <MoreHorizontal className="text-gray-500"/>
            </TableCell>
          </TableRow>
          <TableRow className="h-[30px]">
            <TableCell>
            <Input type="checkbox" className="text-[14px] w-[16px]" />
            </TableCell>
            <TableCell>Ishaq Abubakar</TableCell>
            <TableCell>GitComplex</TableCell>
            <TableCell>gitcomplex@gmail.com</TableCell>
            <TableCell>Lapaz, Nyamekeye</TableCell>
            <TableCell className="font-Medium text-[20px] w-[50px] text-center">
            <MoreHorizontal className="text-gray-500"/>
            </TableCell>
          </TableRow>
          <TableRow className="h-[30px]">
            <TableCell>
            <Input type="checkbox" className="text-[14px] w-[16px]" />
            </TableCell>
            <TableCell>Ishaq Abubakar</TableCell>
            <TableCell>GitComplex</TableCell>
            <TableCell>gitcomplex@gmail.com</TableCell>
            <TableCell>Lapaz, Nyamekeye</TableCell>
            <TableCell className="font-Medium text-[20px] w-[50px] text-center">
            <MoreHorizontal className="text-gray-500"/>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <PaginationDemo />
    </div>
  );
};

export default TableComponent;
