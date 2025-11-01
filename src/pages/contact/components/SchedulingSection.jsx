import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SchedulingSection = () => {
  const [selectedMeetingType, setSelectedMeetingType] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const meetingTypes = [
    {
      id: 'consultation',
      title: 'Free Consultation',
      duration: '30 minutes',
      description: 'Discuss your project requirements and get initial technical insights',
      icon: 'MessageCircle',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      borderColor: 'border-primary/20'
    },
    {
      id: 'technical-review',
      title: 'Technical Review',
      duration: '45 minutes',
      description: 'Deep dive into technical architecture and implementation strategy',
      icon: 'Code',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      borderColor: 'border-accent/20'
    },
    {
      id: 'project-planning',
      title: 'Project Planning',
      duration: '60 minutes',
      description: 'Comprehensive project scoping, timeline, and resource planning',
      icon: 'Calendar',
      color: 'text-success',
      bgColor: 'bg-success/10',
      borderColor: 'border-success/20'
    }
  ];

  const availableDates = [
    { date: '2025-10-23', day: 'Wed', dayNum: '23' },
    { date: '2025-10-24', day: 'Thu', dayNum: '24' },
    { date: '2025-10-25', day: 'Fri', dayNum: '25' },
    { date: '2025-10-28', day: 'Mon', dayNum: '28' },
    { date: '2025-10-29', day: 'Tue', dayNum: '29' },
    { date: '2025-10-30', day: 'Wed', dayNum: '30' }
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', 
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const handleScheduleCall = () => {
    if (selectedMeetingType && selectedDate && selectedTime) {
      // Simulate scheduling
      alert(`Meeting scheduled for ${selectedDate} at ${selectedTime}`);
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Schedule a Meeting
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Book a time that works for you. I'm available for consultations, technical reviews, 
            and project planning sessions. All meetings are conducted via video call.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Meeting Types */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Choose Meeting Type
            </h3>
            <div className="space-y-4">
              {meetingTypes?.map((type) => (
                <div
                  key={type?.id}
                  onClick={() => setSelectedMeetingType(type?.id)}
                  className={`p-4 border rounded-xl cursor-pointer transition-brand ${
                    selectedMeetingType === type?.id
                      ? `${type?.borderColor} ${type?.bgColor}`
                      : 'border-border hover:border-muted'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className={`${type?.bgColor} ${type?.color} w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon name={type?.icon} size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-foreground">{type?.title}</h4>
                        <span className="text-sm text-muted-foreground">{type?.duration}</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {type?.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Date Selection */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Select Date
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {availableDates?.map((date) => (
                <button
                  key={date?.date}
                  onClick={() => setSelectedDate(date?.date)}
                  className={`p-3 border rounded-lg text-center transition-brand ${
                    selectedDate === date?.date
                      ? 'border-primary bg-primary/10 text-primary' :'border-border hover:border-muted text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <div className="text-xs font-medium mb-1">{date?.day}</div>
                  <div className="text-lg font-bold">{date?.dayNum}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Time Selection */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Select Time (EST)
            </h3>
            <div className="space-y-2">
              {timeSlots?.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`w-full p-3 border rounded-lg text-left transition-brand ${
                    selectedTime === time
                      ? 'border-primary bg-primary/10 text-primary' :'border-border hover:border-muted text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Schedule Button */}
        <div className="mt-12 text-center">
          <Button
            variant="default"
            size="lg"
            iconName="Calendar"
            iconPosition="left"
            onClick={handleScheduleCall}
            disabled={!selectedMeetingType || !selectedDate || !selectedTime}
            className="bg-cta hover:bg-cta/90 text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Schedule Meeting
          </Button>
          
          {selectedMeetingType && selectedDate && selectedTime && (
            <p className="text-sm text-muted-foreground mt-4">
              You'll receive a calendar invite and video call link after confirmation
            </p>
          )}
        </div>

        {/* Meeting Info */}
        <div className="mt-16 bg-card border border-border rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Icon name="Video" size={24} className="text-primary mx-auto mb-2" />
              <h4 className="font-semibold text-foreground mb-1">Video Call</h4>
              <p className="text-sm text-muted-foreground">Google Meet or Zoom link provided</p>
            </div>
            <div>
              <Icon name="Shield" size={24} className="text-accent mx-auto mb-2" />
              <h4 className="font-semibold text-foreground mb-1">Confidential</h4>
              <p className="text-sm text-muted-foreground">All discussions are kept private</p>
            </div>
            <div>
              <Icon name="Clock" size={24} className="text-success mx-auto mb-2" />
              <h4 className="font-semibold text-foreground mb-1">Flexible</h4>
              <p className="text-sm text-muted-foreground">Easy rescheduling if needed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchedulingSection;