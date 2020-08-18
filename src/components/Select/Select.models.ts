export interface SelectProps extends DefaultSelectProps {
  data: {
    value: string;
    label: string;
  }[];
}

type DefaultSelectProps = React.InputHTMLAttributes<HTMLSelectElement>;
