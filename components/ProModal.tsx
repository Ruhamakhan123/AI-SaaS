"use Client";

import { useProModal } from "@/hooks/UseProModal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Badge } from "./ui/badge";
import {
  Check,
  Code,
  ImageIcon,
  MessagesSquare,
  Music,
  VideoIcon,
  Zap,
} from "lucide-react";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import axios from "axios";
import { useState } from "react";
const tools = [
  {
    label: "Conversation",
    icon: MessagesSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Image generation",
    icon: ImageIcon,
    bgColor: "bg-pink-500/10",
    color: "text-pink-500",
  },
  {
    label: "Vide Generation",
    icon: VideoIcon,
    bgColor: "bg-orange-500/10",
    color: "text-orange-500",
  },
  {
    label: "Music Generation",
    icon: Music,
    bgColor: "bg-emerald-500/10",
    color: "text-emerald-500",
  },
  {
    label: "Code Generation",
    icon: Code,
    bgColor: "bg-green-500/10",
    color: "text-green-700",
  },
];
const ProModal = () => {
  const proModal = useProModal();
  const [loading, setLoading] = useState(false);
  const onSubscribe = async () => {
    try {
      const response = axios.get("/api/stripe");
      window.location.href = (await response).data.url;
    } catch (error) {
      console.log(error, "STRIPE CLIENT ERROR");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex flex-col items-center justify-center gap-y-4 pb-2">
            <div className="flex items-center gap-x-2 font-bold py-1">
              Upgrade to Genius
              <Badge variant="premium" className="uppercase text-sm py-1">
                pro
              </Badge>
            </div>
          </DialogTitle>
          <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium ">
            {tools.map((tool) => (
              <Card
                key={tool.label}
                className="flex items-center justify-between p-3 border-black/5"
              >
                <div className="flex items-center gap-x-4">
                  <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                    <tool.icon className={cn("w-6 h-6", tool.color)} />
                  </div>
                  <div className="font-semibold text-sm">{tool.label}</div>
                </div>
                <Check className="text-primary w-5 h-5" />
              </Card>
            ))}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            onClick={onSubscribe}
            size="lg"
            variant="premium"
            className=" w-full"
          >
            Upgrade
            <Zap className="w-4 h-4 ml-2 fill-white " />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProModal;
