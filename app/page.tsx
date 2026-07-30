import {
  Boxes,
  ClipboardCheck,
  Factory as FactoryIcon,
  PackageOpen,
  Plus,
  ScanLine,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const workspaces = [
  {
    title: "Releases",
    description: "Import drawings, review packets, and prepare work.",
    icon: PackageOpen,
  },
  {
    title: "Production",
    description: "Track active jobs, departments, and movement scans.",
    icon: FactoryIcon,
  },
  {
    title: "Inventory",
    description: "Manage materials, extrusions, hardware, and counts.",
    icon: Boxes,
  },
  {
    title: "Quality",
    description: "Record checks, exceptions, remakes, and final approval.",
    icon: ClipboardCheck,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b bg-card/50">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <div className="flex items-center gap-3">
            <div className="grid size-9 place-items-center rounded-lg bg-primary text-primary-foreground">
              <FactoryIcon className="size-5" aria-hidden="true" />
            </div>
            <div>
              <p className="font-semibold leading-none">Factory</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Operations workspace
              </p>
            </div>
          </div>
          <Badge variant="outline" className="font-mono">
            Foundation
          </Badge>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-5 py-10 sm:py-14">
        <section className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl space-y-3">
            <Badge className="gap-1.5">
              <ScanLine className="size-3.5" aria-hidden="true" />
              Shop floor ready
            </Badge>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              One place to run production.
            </h1>
            <p className="text-base leading-7 text-muted-foreground">
              The shadcn foundation is in place. Releases, production,
              inventory, and quality can now be built as connected workflows.
            </p>
          </div>
          <Button className="w-full gap-2 sm:w-auto">
            <Plus className="size-4" aria-hidden="true" />
            Start a workflow
          </Button>
        </section>

        <Separator className="my-8" />

        <section aria-labelledby="workspace-heading">
          <div className="mb-4 flex items-center justify-between">
            <h2 id="workspace-heading" className="text-sm font-medium">
              Core workspaces
            </h2>
            <p className="text-xs text-muted-foreground">Ready to define</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {workspaces.map(({ title, description, icon: Icon }) => (
              <Card
                key={title}
                className="transition-colors hover:border-primary/40"
              >
                <CardHeader className="gap-3">
                  <div className="grid size-9 place-items-center rounded-md bg-muted text-muted-foreground">
                    <Icon className="size-4" aria-hidden="true" />
                  </div>
                  <div className="space-y-1.5">
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="leading-6">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
