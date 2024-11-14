import type { BuiltInNode, Node, NodeTypes } from "@xyflow/react";
import PositionLoggerNode, {
  type PositionLoggerNode as PositionLoggerNodeType,
} from "./PositionLoggerNode";
import FormNode, { type FormNode as FormNodeType } from "./FormNode";
import SubmissionNode, {
  type SubmissionNode as SubmissionNodeType,
} from "./SubmissionNode";

export const initialNodes = [
  {
    id: "form-a",
    type: "form-node",
    position: { x: 100, y: 100 },
    data: { formName: "Incident Form" },
  },
  {
    id: "form-b",
    type: "form-node",
    position: { x: 100, y: 200 },
    data: { formName: "After Action Form" },
  },
  {
    id: "submission-a",
    type: "submission-node",
    position: { x: 100, y: 500 },
    data: { formName: "Incident Form" },
  },
] satisfies Node[];

export const nodeTypes = {
  "position-logger": PositionLoggerNode,
  "form-node": FormNode,
  "submission-node": SubmissionNode,
  // Add any of your custom nodes here!
} satisfies NodeTypes;

// Append the types of you custom edges to the BuiltInNode type
export type CustomNodeType =
  | BuiltInNode
  | PositionLoggerNodeType
  | FormNodeType
  | SubmissionNodeType;
