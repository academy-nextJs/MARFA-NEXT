// برای ظی شدن مسیر ها در سایت  به صورت خانه< هتل< رزرو  حالا فقط باید یک ابجکت از مسیر ها بدی در جایی که می خوای این کامپوننت و صدا بزنی و..
import React from "react";
import Link from "next/link";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: Breadcrumb[];
}

const RoutPageurl: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {item.href ? (
            <Link href={item.href} className="hover:text-blue-500">
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-500">{item.label}</span>
          )}
          {index < items.length - 1 && <span className="text-gray-400">›</span>}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default RoutPageurl;
