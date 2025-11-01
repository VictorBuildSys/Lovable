import { Calendar, Clock, CloudRain, Droplets, Battery, Gauge } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Dashboard = () => {
  // Dados simulados - podem ser substituídos por dados reais de uma API
  const dashboardData = {
    date: new Date().toLocaleDateString('pt-BR'),
    time: new Date().toLocaleTimeString('pt-BR'),
    rain: "15 mm",
    flow: "250 L/min",
    battery: 85,
    level: 65,
  };

  const metrics = [
    {
      icon: Calendar,
      label: "Data",
      value: dashboardData.date,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Clock,
      label: "Hora",
      value: dashboardData.time,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: CloudRain,
      label: "Chuva",
      value: dashboardData.rain,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Droplets,
      label: "Vazão",
      value: dashboardData.flow,
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Painel de Monitoramento
          </h2>
          <p className="text-muted-foreground text-lg">
            Acompanhe em tempo real as informações do sistema
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Métricas principais */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {metrics.map((metric, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className={`${metric.bgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <metric.icon className={metric.color} size={24} />
                </div>
                <p className="text-sm text-muted-foreground mb-1">{metric.label}</p>
                <p className="text-2xl font-bold">{metric.value}</p>
              </Card>
            ))}
          </div>

          {/* Bateria e Nível com barras de progresso */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Bateria */}
            <Card className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-green-500/10 w-14 h-14 rounded-lg flex items-center justify-center">
                  <Battery className="text-green-500" size={28} />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-1">Nível de Bateria</p>
                  <p className="text-3xl font-bold">{dashboardData.battery}%</p>
                </div>
              </div>
              <Progress value={dashboardData.battery} className="h-3" />
              <p className="text-xs text-muted-foreground mt-2">
                {dashboardData.battery > 50 ? "Bateria em bom estado" : "Considere carregar"}
              </p>
            </Card>

            {/* Nível */}
            <Card className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-amber-500/10 w-14 h-14 rounded-lg flex items-center justify-center">
                  <Gauge className="text-amber-500" size={28} />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-1">Nível</p>
                  <p className="text-3xl font-bold">{dashboardData.level}%</p>
                </div>
              </div>
              <Progress value={dashboardData.level} className="h-3" />
              <p className="text-xs text-muted-foreground mt-2">
                {dashboardData.level > 80 ? "Nível crítico - atenção necessária" : "Nível normal"}
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;