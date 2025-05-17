'use client'
import { FC } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const CustomBreadcrumbs: FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex items-center justify-center font-yekan font-semibold text-sm text-gray-600 dark:text-gray-300 space-x-reverse space-x-2 rtl:space-x-2">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div key={index} className="flex items-center gap-1">
            {!isLast ? (
              <>
                <Link
                  href={item.href || "#"}
                  className="text-primary hover:underline transition"
                >
                  {item.label}
                </Link>
                <ChevronLeft size={14} />
              </>
            ) : (
              <span className="font-bold text-gray-900 dark:text-white">{item.label}</span>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default CustomBreadcrumbs


// import React from "react";
// import { Breadcrumbs, Link as NextUILink, Text} from "@nextui-org/react";
// import NextLink from "next/link";


// interface BreadcrumbItem {
//   label: string;
//   href?: string;
// }

// interface BreadcrumbProps {
//   items: BreadcrumbItem[];
// }

// export default function CustomBreadcrumbs({ items }: BreadcrumbProps ) {
//   return (
//     <Breadcrumbs className="bg-slate-500">
//       {items.map((item, index) => {
//         const isLast = index === items.length - 1;

//         if (isLast) {
//           return (
//             <Text key={index} color="primary" b>
//               {item.label}
//             </Text>
//           );
//         }

//         return (
//           <NextUILink
//             key={index}
//             href={item.href || "#"}
//             component={NextLink}
//             color="primary"
//             underline="hover"
            
//           >
//             {item.label}
//           </NextUILink>
//         );
//       })}
//     </Breadcrumbs>
//   );
//   }