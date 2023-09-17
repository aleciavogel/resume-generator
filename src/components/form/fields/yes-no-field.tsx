import { FormControl } from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface YesNoFieldProps {
  onValueChange: (value: string) => void
  defaultValue?: string
  placeholder?: string
  yesLabel?: string
  noLabel?: string
}

const YesNoField: React.FC<YesNoFieldProps> = ({ placeholder, yesLabel, noLabel, ...props }) => {
  return (
    <Select {...props}>
      <FormControl>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
      </FormControl>
      <SelectContent>
        <SelectItem value="false">{noLabel ?? 'No'}</SelectItem>
        <SelectItem value="true">{yesLabel ?? 'Yes'}</SelectItem>
      </SelectContent>
    </Select>
  )
}

export default YesNoField
