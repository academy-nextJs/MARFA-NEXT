"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {
  Card,
  CardBody,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Slider,
} from "@heroui/react";

export default function ReservFilter() {
  return (
    <Card className="max-w-md w-full border-none shadow-none  p-4 rounded-2xl mx-auto text-right bg-white font-yekan  dark:bg-gray-900">
      <CardBody className="space-y-4">
        <div className="flex justify-between items-center border-b pb-4">
          <h3 className="font-bold text-lg">فیلترها</h3>
          <Button variant="light" size="sm" className="text-danger text-sm font-bold">
            حذف همه  <FontAwesomeIcon icon={faTrash} style={{ color: "red" }} />
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4">
          <Dropdown>
            <DropdownTrigger>
              <Button variant="bordered" className="w-full font-bold pt-2 pb-2">
                مرتب سازی بر اساس
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Sort By pt-6 pb-6">
              <DropdownItem key="date">تاریخ</DropdownItem>
              <DropdownItem key="price">قیمت</DropdownItem>
              <DropdownItem key="rating">امتیاز</DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <Dropdown>
            <DropdownTrigger>
              <Button variant="bordered" className="w-full  font-bold pt-2 pb-2">
                مقصد یا هتل شما
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Location">
              <DropdownItem key="tehran">تهران</DropdownItem>
              <DropdownItem key="shiraz">شیراز</DropdownItem>
              <DropdownItem key="mashhad">مشهد</DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <div className="col-span-2 px-2 py-4">
            <p className="text-sm font-bold text-gray-700 mb-2 flex justify-between">
              <span >قیمت از ۱٬۵۰۰٬۰۰۰ تومان   </span>
             
              <span > تا ۵٬۵۰۰٬۰۰۰ تومان</span>
            </p>
            <Slider
              minValue={1000000}
              maxValue={6000000}
              defaultValue={[1500000, 5500000]}
              formatOptions={{ style: "currency", currency: "IRR" }}
              step={50000}
              className="mt-1"
            />
          </div>

          <Dropdown>
            <DropdownTrigger>
              <Button variant="bordered" className="w-full  font-bold py-2">
                امتیاز هتل
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Rating">
              <DropdownItem key="5">۵</DropdownItem>
              <DropdownItem key="4">۴</DropdownItem>
              <DropdownItem key="3">۳</DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <Dropdown>
            <DropdownTrigger>
              <Button variant="bordered" className="w-full  font-bold ">
                امکانات هتل
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Features">
              <DropdownItem key="wifi">وای‌فای</DropdownItem>
              <DropdownItem key="pool">استخر</DropdownItem>
              <DropdownItem key="parking">پارکینگ</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>

        <div className="flex justify-center gap-4 pt-2 font-bold">
          <Button className="bg-primary text-white font-bold">مشاهده نتیجه</Button>
          <Button variant="bordered " className='border font-bold'>بستن</Button>
        </div>
      </CardBody>
    </Card>
  );
}
