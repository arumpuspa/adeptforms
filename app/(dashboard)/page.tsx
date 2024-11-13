"use client";
import { Breadcrumbs, BreadcrumbItem } from "@/components/ui/breadcrumbs";
import "formiojs/dist/formio.full.min.css";
import "@tsed/tailwind-formio/styles/index.css";
// import { FormBuilder } from '@formio/react';
import dynamic from "next/dynamic";
const FormBuilder = dynamic(
  () => import("@formio/react").then((module) => module.FormBuilder),
  {
    ssr: false,
  }
);

const BlankPage = () => {
  return (
    <div>
      <Breadcrumbs>
        <BreadcrumbItem>Utility</BreadcrumbItem>
        <BreadcrumbItem className="text-primary">Blankks Page</BreadcrumbItem>
      </Breadcrumbs>
      <div className="mt-5 text-2xl font-medium text-default-900">
        <FormBuilder form={{ display: "form" }} />
      </div>
    </div>
  );
};

export default BlankPage;
