import { Icon } from "@iconify/react";
import type { Node, NodeProps } from "@xyflow/react";
import { Handle, Position } from "@xyflow/react";

export type FormNodeData = {
  formName?: string;
};

export type FormNode = Node<FormNodeData>;

export default function FormNode({ data, selected }: NodeProps<FormNode>) {
  return (
    // We add this class to use the same styles as React Flow's default nodes.
    <div
      className={`border ${
        selected ? "border-yellow-500" : "border-slate-500"
      } rounded bg-white p-3`}
    >
      <div className="grid grid-cols-4 gap-3">
        <div className="flex justify-center items-center">
          <Icon icon="heroicons:document-text" className="w-7 h-7" />
        </div>
        <div className="col-span-3">
          <div className="text-lg font-semibold">Form</div>
          <div className="text-sm font-light">{data.formName}</div>
        </div>
      </div>
      <Handle type="source" position={Position.Bottom} />
      <Handle type="target" position={Position.Top} />
    </div>
  );
}
