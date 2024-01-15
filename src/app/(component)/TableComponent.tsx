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
import { Edit, Eye, MoreHorizontal, SortAsc, Trash } from "lucide-react";
import { useState } from "react";
import PaginationDemo from "./Pagination";

const TableComponent = () => {
  const [searchInput, setSearchInput] = useState("");
  const [sortOption, setSortOption] = useState() as any;
  const [data, setData] = useState([
    {
      id: 1,
      name: "Ishaq Abubakar",
      school: "Primus International",
      email: "something@gmail.com",
      location: "Lapz",
    },
    {
      id: 1,
      name: "John Doe",
      school: "Primary School",
      email: "john.doe@example.com",
      location: "City",
    },
    {
      id: 2,
      name: "Alice Johnson",
      school: "High School",
      email: "alice.johnson@example.com",
      location: "Suburb",
    },
    {
      id: 3,
      name: "Bob Brown",
      school: "Elementary School",
      email: "bob.brown@example.com",
      location: "Town",
    },
    {
      id: 4,
      name: "Emma Davis",
      school: "Middle School",
      email: "emma.davis@example.com",
      location: "Village",
    },
    {
      id: 5,
      name: "Frank Johnson",
      school: "Secondary School",
      email: "frank.johnson@example.com",
      location: "Rural Area",
    },
    {
      id: 6,
      name: "Grace Wilson",
      school: "International School",
      email: "grace.wilson@example.com",
      location: "Coastal Area",
    },
    {
      id: 7,
      name: "Henry Miller",
      school: "Private School",
      email: "henry.miller@example.com",
      location: "Mountainous Region",
    },
    {
      id: 8,
      name: "Isabel Smith",
      school: "Public School",
      email: "isabel.smith@example.com",
      location: "Island",
    },
    {
      id: 9,
      name: "James White",
      school: "Charter School",
      email: "james.white@example.com",
      location: "Desert",
    },
    {
      id: 10,
      name: "Lily Moore",
      school: "Magnet School",
      email: "lily.moore@example.com",
      location: "Forest",
    },
  ]);

  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      String(value).toLowerCase().includes(searchInput.toLowerCase())
    )
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (sortOption === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortOption === "school") {
      return a.school.localeCompare(b.school);
    } else {
      return 0; // No sorting by default
    }
  });

  return (
    <div className="w-full rounded-sm h-full bg-white border p-0 overflow-clip">
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
            <DropdownMenuItem onSelect={() => setSortOption("name")}>
              Name
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setSortOption("school")}>
              School
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="w-full h-full overflow-y-scroll no-scrollbar pb-[100px]">
        <Table className="bg-white w-full border-b">
          <TableHeader className="rounded-sm">
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>School</TableHead>
              <TableHead className="">Email</TableHead>
              <TableHead className="">Location</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="overflow-y-scroll">
            {sortedData.map((item) => (
              <TableRow className="h-[20px] p-0" key={item.id}>
                <TableCell className="py-2">{item.name}</TableCell>
                <TableCell className="py-2">{item.school}</TableCell>
                <TableCell className="py-2 ">{item.email}</TableCell>
                <TableCell className="py-2 ">{item.location}</TableCell>
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
                      <DropdownMenuItem onSelect={() => alert(item.school)}>
                        <Eye className="mr-2 text-brand-icon" /> View
                      </DropdownMenuItem>
                      <DropdownMenuItem onSelect={() => alert("Edit")}>
                        <Edit className="mr-2 text-brand-icon" /> Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem onSelect={() => alert("Delete")}>
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
    
    </div>
  );
};

export default TableComponent;
