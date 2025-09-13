import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface TransactionItemProps {
  streamer: string;
  amount: number;
  time: string;
  status: string;
  walletAddress?: string;
  streamUrl?: string;
  transactionHash?: string;
}

export const TransactionItem = ({ streamer, amount, time, status, walletAddress, streamUrl, transactionHash }: TransactionItemProps) => {
  console.log("TransactionItem props:", { streamer, amount, time, status, walletAddress, streamUrl, transactionHash });
  
  const handleStreamClick = () => {
    if (streamUrl) {
      window.open(streamUrl, '_blank');
    }
  };

  const handleSolscanClick = () => {
    if (transactionHash) {
      window.open(`https://solscan.io/tx/${transactionHash}`, '_blank');
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 p-4 border border-brand-secondary/20 rounded-lg bg-brand-secondary/5 hover:bg-brand-secondary/10 transition-colors">
      <div className="flex items-center gap-2">
        <span className="font-semibold text-foreground">{streamer}</span>
        <button
          onClick={handleStreamClick}
          className="text-lg hover:scale-110 transition-transform"
          disabled={!streamUrl}
          title="Watch Stream"
        >
          📺
        </button>
      </div>
      <div className="text-lg font-bold text-brand-primary">{amount.toFixed(2)} SOL <span className="text-sm text-muted-foreground">(${(amount * 220).toFixed(2)})</span></div>
      <div className="text-sm text-muted-foreground">{time}</div>
      <div className="font-mono text-xs text-muted-foreground truncate" title={walletAddress || "N/A"}>
        {walletAddress ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : "N/A"}
      </div>
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={handleSolscanClick}
          className="h-8 px-2 border-brand-secondary/40 hover:bg-brand-secondary/20"
          disabled={!transactionHash}
        >
          <ExternalLink className="h-3 w-3" />
        </Button>
        <Badge variant="secondary" className="bg-success/10 text-success hover:bg-success/20">
          {status}
        </Badge>
      </div>
    </div>
  );
};
