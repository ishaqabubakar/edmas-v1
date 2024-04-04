
"use client"
import axiosInstance from "@/API/AXIOS";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { UserContext } from "@/contextAPI/generalContext";
import { Edit, Eye, MoreHorizontal, SortAsc, Trash } from "lucide-react";
import { useContext, useState } from "react";
import { toast } from "sonner";
// import {ModalDelete } from "../DailogModal";
import { useRouter } from "next/navigation";

const SubjectTable = () => {
  const [searchInput, setSearchInput] = useState("");
  const [sortOption, setSortOption] = useState() as any;
  const contxtValue = useContext(UserContext);
  const router = useRouter();
  const data = contxtValue?.subjectBySchoolId;
  const filteredData = Array.isArray(data)
    ? data.filter((item: any) =>
        Object.values(item).some((value) =>
          String(value).toLowerCase().includes(searchInput.toLowerCase())
        )
      )
    : [];

  const sortedData = [...filteredData]?.sort((a, b) => {
    if (sortOption === "subjectname") {
      return a.subjectname.localeCompare(b.subjectname);
    } else {
      return 0;
    }
  });
  const handleDelete = async (id: any) => {
    try {
      const res = await axiosInstance.post("/delete-subject", {
        id: id,
      });
      if (res.status === 200) {
        return router.refresh();
      }
    } catch (error: any) {
      return toast.error("Failed to delete subject");
    }
  };
  return (
    <div
      className={`w-full flex flex-col rounded-sm h-full bg-white border p-0 overflow-clip ${
        !data && "item-center justify-center"
      }`}
    >
      {data && (
        <div className="flex justify-between items-center py-3 px-3 gap-2">
          <Input
            type="search"
            placeholder="Search"
            className="w-[400px] rounded-sm focus-visible:outline-none"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="border">
              <div className="flex gap-1 py-1 px-3 h-[40px] rounded-sm items-center justify-center">
                <SortAsc className="text-brand-icon" size={15} />
                <p className="text-brand-icon text-[14px]">Sort</p>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40 mr-7 rounded-sm">
              <DropdownMenuLabel>Sort By</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onSelect={() => setSortOption("subjectname")}>
                Name
              </DropdownMenuItem>
              {/* <DropdownMenuItem onSelect={() => setSortOption("size")}>
               Size
              </DropdownMenuItem> */}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
      {data && (
        <div className="w-full h-full overflow-y-scroll no-scrollbar pb-[100px]">
          <Table className="bg-white w-full border-b">
            <TableHeader className="rounded-sm">
              <TableRow>
                <TableHead>Subject Name</TableHead>
                {/* <TableHead>Class Size</TableHead> */}
                <TableHead className="text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody className="overflow-y-scroll">
              {sortedData.map((item: any, index: number) => (
                <TableRow
                  className={`h-[20px] p-0 ${
                    index % 2 === 0 ? "bg-gray-50" : ""
                  }`}
                  key={item.id}
                >
                  <TableCell className="py-2">{item.subjectname}</TableCell>
                  {/* <TableCell className="py-2 ">{item.size}</TableCell> */}
                  <TableCell className="font-Medium text-[16px] w-[40px] py-2 text-center">
                    <DropdownMenu>
                      <DropdownMenuTrigger
                        asChild
                        className="w-fit mr-auto ml-auto"
                      >
                        <MoreHorizontal className="text-brand-icon" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-40 mr-7 rounded-sm">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onSelect={() => alert(item._id)}>
                          <Eye className="mr-2 text-brand-icon" /> View
                        </DropdownMenuItem>
                        <DropdownMenuItem onSelect={() => alert("Edit")}>
                          <Edit className="mr-2 text-brand-icon" /> Edit
                        </DropdownMenuItem>
                        {/* <ModalDelete
                          id={item._id}
                          handleDelete={handleDelete}
                        /> */}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
      {!data && (
        <p className="text-[16px] animate-pulse p-5 text-center">
          Loading data...
        </p>
      )}
    </div>
  );
};

export default SubjectTable;
