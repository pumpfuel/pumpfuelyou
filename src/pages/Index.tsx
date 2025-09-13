import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { StatCard } from "@/components/StatCard";
import { TransactionItem } from "@/components/TransactionItem";
import { useToast } from "@/hooks/use-toast";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Transaction {
  streamer: string;
  amount: number;
  timestamp: Date;
  status: string;
}

const initialTransactions: Transaction[] = [
  {
    streamer: "example",
    amount: 6.9,
    timestamp: new Date(Date.now() - 2 * 60 * 1000), // 2 minutes ago
    status: "Confirmed"
  }
];

const Index = () => {
  const [transactions, setTransactions] = useState<Transaction[]>(initialTransactions);
  const [currentTime, setCurrentTime] = useState(new Date());
  const { toast } = useToast();
  
  // Update current time every 30 seconds to refresh relative times
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 30000);
    
    return () => clearInterval(interval);
  }, []);
  
  const getRelativeTime = (timestamp: Date) => {
    const now = currentTime.getTime();
    const past = timestamp.getTime();
    const diffInSeconds = Math.floor((now - past) / 1000);
    
    if (diffInSeconds < 60) {
      return `${diffInSeconds} seconds ago`;
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    } else {
      const days = Math.floor(diffInSeconds / 86400);
      return `${days} day${days !== 1 ? 's' : ''} ago`;
    }
  };
  
  console.log("Transactions state:", transactions);
  console.log("Transactions length:", transactions.length);
  
  const totalDonations = transactions.reduce((sum, t) => sum + t.amount, 0);
  const totalFees = totalDonations * 0.1; // 10% platform fee
  
  const contractAddress = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxpump";
  
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      toast({
        description: "Contract address copied to clipboard!",
      });
    } catch (err) {
      toast({
        description: "Failed to copy to clipboard",
        variant: "destructive",
      });
    }
  };
  

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <StatCard 
            value="$0" 
            label="Total Donations" 
          />
          <StatCard 
            value="$0" 
            label="Total Fees" 
          />
          <StatCard 
            value="$0" 
            label="Market Cap" 
          />
          <StatCard 
            value="0" 
            label="Total Streamers" 
          />
        </div>

        {/* Transactions Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-foreground text-center mb-8">
            Recent Donations
          </h2>
          
          <div className="bg-card rounded-2xl border border-brand-secondary/20 overflow-hidden shadow-[0_8px_32px_rgba(34,197,94,0.08)]">
            <div className="bg-gradient-to-r from-brand-secondary to-brand-primary p-6">
              <h3 className="text-white text-xl font-semibold">Live Donation Feed</h3>
            </div>
            
            <div className="bg-brand-secondary/20 border border-brand-secondary/50 rounded-xl p-6 space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 text-sm font-semibold text-muted-foreground border-b border-brand-secondary/20 pb-3">
                <div>Streamer</div>
                <div>Amount</div>
                <div>Time</div>
                <div>Wallet</div>
                <div>Actions</div>
              </div>
              {transactions.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  No donations yet. Be the first to support a streamer!
                </div>
              ) : (
                <div className="space-y-3">
                  {transactions.map((transaction, index) => (
                     <TransactionItem
                       key={`${transaction.streamer}-${index}`}
                       streamer={transaction.streamer}
                       amount={transaction.amount}
                       time={getRelativeTime(transaction.timestamp)}
                       status={transaction.status}
                       walletAddress="7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU"
                       streamUrl="https://pump.fun/live"
                       transactionHash="5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp"
                     />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-border py-8 mt-16">
        <div className="container mx-auto px-4">
          {/* Contract Address Box */}
          <div className="mb-6">
            <div className="bg-brand-secondary/20 border border-brand-secondary/40 rounded-xl p-4 shadow-[0_8px_32px_rgba(34,197,94,0.08)] max-w-md mx-auto">
              <div className="flex items-center justify-center gap-3">
                <div className="text-sm font-mono text-foreground">{contractAddress}</div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={copyToClipboard}
                  className="h-8 w-8 p-0 border-brand-secondary/40 hover:bg-brand-secondary/20"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="text-center text-muted-foreground">
            <p>&copy; 2025 Pumpfuel. Supporting the Pumpfun streaming community.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
