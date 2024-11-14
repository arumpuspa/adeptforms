"use client";
import { Breadcrumbs, BreadcrumbItem } from "@/components/ui/breadcrumbs";
import "formiojs/dist/formio.full.min.css";
import "@tsed/tailwind-formio/styles/index.css";
// import { FormBuilder } from '@formio/react';
import Flow from "./components/FLow";

const WorkflowPage = () => {
  return (
    <div>
      <Breadcrumbs>
        <BreadcrumbItem>Workflow</BreadcrumbItem>
        <BreadcrumbItem className="text-primary">
          Create Workflow
        </BreadcrumbItem>
      </Breadcrumbs>
      <div className="h-[600px] w-full">
        <Flow />
      </div>
    </div>
  );
};

export default WorkflowPage;
