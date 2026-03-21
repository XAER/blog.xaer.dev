import { parseISO, format } from "date-fns";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString);
  return (
    <time
      dateTime={dateString}
      className="font-mono text-[11px] text-muted whitespace-nowrap shrink-0"
    >
      {format(date, "MMM d, yyyy")}
    </time>
  );
};

export default DateFormatter;
