import projects from "@/data/projects.json";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") return res.status(200).json(projects);

  res.setHeader("Allow", ["GET"]);
  return res.status(405).json({
    error: `Method ${req.method} Not Allowed`
  })
}
