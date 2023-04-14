import classes from 'styles/works-body.module.scss'
import DefinitionList from './definition-list'
import Button from './button'
import { WorksBodyContent } from '@/types/Type'

const WorksBody: React.FC<WorksBodyContent> = ({ title, tools, time, desc, url }) => {
  return (
    <div className={classes.container}>
      <dl className={classes.wrapper}>
        <DefinitionList title='client' desc={title} />
        <DefinitionList title='tools' desc={tools} />
        <DefinitionList title='creation time' desc={time} ja />
        <DefinitionList title='about' desc={desc} ja />
      </dl>
      <Button url={url} />
    </div>
  )
}

export default WorksBody
