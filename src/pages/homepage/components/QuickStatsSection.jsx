import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const QuickStatsSection = () => {
  const [counters, setCounters] = useState({
    users: 0,
    transactions: 0,
    optimization: 0,
    projects: 0
  });

  const finalValues = {
    users: 75000,
    transactions: 3000000,
    optimization: 40,
    projects: 15
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = Object.keys(finalValues)?.map(key => {
      const increment = finalValues?.[key] / steps;
      let currentStep = 0;

      return setInterval(() => {
        currentStep++;
        setCounters(prev => ({
          ...prev,
          [key]: Math.min(Math.floor(increment * currentStep), finalValues?.[key])
        }));

        if (currentStep >= steps) {
          clearInterval(intervals?.find(interval => interval === this));
        }
      }, stepDuration);
    });

    return () => intervals?.forEach(interval => clearInterval(interval));
  }, []);

  const stats = [
    {
      icon: 'Users',
      value: counters?.users,
      suffix: '+',
      label: 'Users Served',
      description: 'Active users across fintech platforms',
      color: 'text-conversion-accent',
      bgColor: 'bg-conversion-accent/10'
    },
    {
      icon: 'DollarSign',
      value: counters?.transactions,
      suffix: '+',
      label: 'ETB Daily Transactions',
      description: 'Processing millions in daily volume',
      color: 'text-trust-builder',
      bgColor: 'bg-trust-builder/10',
      format: 'currency'
    },
    {
      icon: 'TrendingUp',
      value: counters?.optimization,
      suffix: '%',
      label: 'Process Optimization',
      description: 'Reduction in manual interventions',
      color: 'text-cta',
      bgColor: 'bg-cta/10'
    },
    {
      icon: 'Code',
      value: counters?.projects,
      suffix: '+',
      label: 'Projects Delivered',
      description: 'Production-ready solutions',
      color: 'text-warning',
      bgColor: 'bg-warning/10'
    }
  ];

  const formatValue = (value, format) => {
    if (format === 'currency') {
      return (value / 1000000)?.toFixed(1) + 'M';
    }
    if (value >= 1000) {
      return (value / 1000)?.toFixed(0) + 'K';
    }
    return value?.toString();
  };

  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Impact by the Numbers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Quantified achievements that demonstrate the real-world impact of 
            engineering solutions across fintech and enterprise systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats?.map((stat, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="bg-background border border-border rounded-lg p-6 text-center transition-brand hover:shadow-brand-strong hover:border-primary/20">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${stat?.bgColor} mb-4`}>
                  <Icon name={stat?.icon} size={24} className={stat?.color} />
                </div>

                {/* Value */}
                <div className="mb-2">
                  <span className={`text-3xl font-bold ${stat?.color}`}>
                    {formatValue(stat?.value, stat?.format)}
                  </span>
                  <span className={`text-2xl font-bold ${stat?.color}`}>
                    {stat?.suffix}
                  </span>
                </div>

                {/* Label */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {stat?.label}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground">
                  {stat?.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-brand rounded-lg"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Context */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-muted rounded-full">
            <Icon name="TrendingUp" size={16} className="text-success" />
            <span className="text-sm text-muted-foreground">
              Consistent growth across all metrics since 2022
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickStatsSection;