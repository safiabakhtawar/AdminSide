import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (window.confirm(`Are you sure you want to delete the event '${selected.event.title}'`)) {
      selected.event.remove();
    }
  };

  return (
    <Box m="20px">
      <Typography
        variant="h4"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ mb: "20px" }}
      >
        Calendar
      </Typography>
      <Box
        sx={{
          "& .fc": {
            backgroundColor: colors.primary[400],
            color: colors.grey[100],
          },
          "& .fc-col-header-cell": {
            backgroundColor: colors.primary[500],
          },
          "& .fc-daygrid-day": {
            backgroundColor: colors.primary[400],
          },
          "& .fc-day-other": {
            backgroundColor: colors.primary[400],
          },
          "& .fc-daygrid-day-number": {
            color: colors.grey[100],
          },
          "& .fc-daygrid-day-top": {
            color: colors.grey[100],
          },
          "& .fc-toolbar-title": {
            color: colors.grey[100],
          },
          "& .fc-button": {
            backgroundColor: colors.primary[700],
            color: colors.grey[100],
            border: "none",
          },
          "& .fc-button:hover": {
            backgroundColor: colors.primary[600],
          },
          "& .fc-button-active": {
            backgroundColor: colors.blueAccent[500],
          },
        }}
      >
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          select={handleDateClick}
          eventClick={handleEventClick}
          eventsSet={(events) => setCurrentEvents(events)}
          initialEvents={[]}
        />
      </Box>
    </Box>
  );
};

export default Calendar;