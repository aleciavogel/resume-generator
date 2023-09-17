import { FormControl } from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface RoleFieldProps {
  onValueChange: (value: string) => void
  defaultValue?: string
}

const RoleField: React.FC<RoleFieldProps> = (props) => {
  return (
    <Select {...props}>
      <FormControl>
        <SelectTrigger>
          <SelectValue placeholder="Select your role" />
        </SelectTrigger>
      </FormControl>
      <SelectContent>
        <SelectItem value="recruiter">Recruiter</SelectItem>
        <SelectItem value="manager">Hiring Manager</SelectItem>
        <SelectItem value="client">Potential Freelance Client</SelectItem>
        <SelectItem value="curious">Just a curious person 👀</SelectItem>
        <SelectItem value="other">Something else...</SelectItem>
      </SelectContent>
    </Select>
  )
}

export default RoleField
