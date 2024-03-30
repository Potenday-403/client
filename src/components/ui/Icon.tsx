import {
  ArrowRightIcon,
  BarChartIcon,
  CalendarPlusIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  CircleCheckIcon,
  CircleChevronRightIcon,
  CirclePlusIcon,
  CircleXIcon,
  DownloadIcon,
  FilesIcon,
  HomeIcon,
  ImagePlusIcon,
  MessageSquareIcon,
  MoveLeftIcon,
  MoveRightIcon,
  PlusIcon,
  RotateCwIcon,
  SearchIcon,
  SendIcon,
  SquarePenIcon,
  TrashIcon,
  UserIcon,
  XIcon,
} from "lucide-react";

interface IconProps extends React.SVGProps<SVGSVGElement> {}

const FillIcon = (props: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="12"
        cy="12"
        r="11.25"
        fill="#FF9518"
        stroke="#FFF7EB"
        stroke-width="1.5"
      />
      <path
        d="M10.0017 16.6617C9.82835 16.6617 9.66167 16.595 9.52833 16.4683L6.195 13.135C5.935 12.875 5.935 12.455 6.195 12.195C6.455 11.935 6.87502 11.935 7.13502 12.195L9.99501 15.055L16.855 8.195C17.115 7.935 17.535 7.935 17.795 8.195C18.055 8.455 18.055 8.875 17.795 9.135L10.4617 16.4683C10.3283 16.6017 10.1617 16.6617 9.98834 16.6617H10.0017Z"
        fill="white"
      />
    </svg>
  );
};

const NewIcon = (props: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_283_18193)">
        <circle
          cx="10"
          cy="10"
          r="7.25"
          fill="#D04354"
          stroke="white"
          stroke-width="1.5"
        />
        <path
          d="M12.7568 13H12.001L8.55566 8.04297H8.49414V13H7.70312V6.63672H8.46777L11.9131 11.6025H11.9746V6.63672H12.7568V13Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_283_18193">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const EmptyIcon = (props: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="12"
        cy="12"
        r="11.25"
        fill="white"
        stroke="#E5E5E5"
        stroke-width="1.5"
      />
      <path
        d="M10.0017 16.6617C9.82835 16.6617 9.66167 16.595 9.52833 16.4683L6.195 13.135C5.935 12.875 5.935 12.455 6.195 12.195C6.455 11.935 6.87502 11.935 7.13502 12.195L9.99501 15.055L16.855 8.195C17.115 7.935 17.535 7.935 17.795 8.195C18.055 8.455 18.055 8.875 17.795 9.135L10.4617 16.4683C10.3283 16.6017 10.1617 16.6617 9.98834 16.6617H10.0017Z"
        fill="white"
      />
    </svg>
  );
};

export {
  ArrowRightIcon,
  BarChartIcon,
  CalendarPlusIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  CircleCheckIcon,
  CircleChevronRightIcon,
  CirclePlusIcon,
  CircleXIcon,
  DownloadIcon,
  FilesIcon,
  HomeIcon,
  ImagePlusIcon,
  MessageSquareIcon,
  MoveLeftIcon,
  MoveRightIcon,
  PlusIcon,
  RotateCwIcon,
  SearchIcon,
  SendIcon,
  SquarePenIcon,
  TrashIcon,
  UserIcon,
  XIcon,
  FillIcon,
  NewIcon,
  EmptyIcon,
};
