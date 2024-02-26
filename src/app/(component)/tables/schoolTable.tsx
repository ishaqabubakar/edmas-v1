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
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

const SchoolTable = () => {
  const [searchInput, setSearchInput] = useState("");
  const [sortOption, setSortOption] = useState() as any;
  const router = useRouter();
  const contxtValue = useContext(UserContext);
  const data = contxtValue?.schoolData;
  const filteredData = Array.isArray(data)
    ? data.filter((item: any) =>
        Object.values(item).some((value) =>
          String(value).toLowerCase().includes(searchInput.toLowerCase())
        )
      )
    : [];

  const sortedData = [...filteredData]?.sort((a, b) => {
    if (sortOption === "fullname") {
      return a.fullname.localeCompare(b.fullname);
    } else {
      return 0; // No sorting by default
    }
  });

  return (
    <div className={`w-full flex flex-col rounded-sm h-full bg-white border p-0 overflow-clip ${!data && 'item-center justify-center'}`}>
      {data && (
        <div className="flex justify-between items-center py-3 px-3">
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
              <DropdownMenuItem onSelect={() => setSortOption("fullname")}>
                School
              </DropdownMenuItem>
              {/* <DropdownMenuItem onSelect={() => setSortOption("school")}>
             Location
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
                <TableHead>Full Name</TableHead>
                <TableHead>Location</TableHead>
                <TableHead className="">Phone</TableHead>
                <TableHead className="">Email</TableHead>
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
                  <TableCell className="py-2">{item.fullname}</TableCell>
                  <TableCell className="py-2">{item.location}</TableCell>
                  <TableCell className="py-2 ">{item.phone}</TableCell>
                  <TableCell className="py-2 ">{item.email}</TableCell>
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
                        <DropdownMenuItem onSelect={async() =>{
                          await contxtValue.fetchCurrentSchoolById(item._id)
                          router.push(
                            `/dashboard/Schools?id=${item._id}&mode=view`
                          );
                        }}>
                          <Eye className="mr-2 text-brand-icon" /> View
                        </DropdownMenuItem>
                        <DropdownMenuItem onSelect={async() =>{
                          await contxtValue.fetchCurrentSchoolById(item._id)
                          router.push(
                            `/dashboard/Schools?id=${item._id}&mode=edit`
                          );
                        }}>
                          <Edit className="mr-2 text-brand-icon" /> Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem onSelect={() => alert(item._id)}>
                          <Trash className="mr-2 text-brand-icon" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
        {!data &&  <p className="text-[16px] animate-pulse p-5 text-center">Loading data...</p>}
    </div>
  );
};

export default SchoolTable;
