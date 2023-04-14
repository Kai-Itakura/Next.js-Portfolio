import { ContainerContent } from '@/types/Type'
import classes from 'styles/container.module.scss'

const Container: React.FC<ContainerContent> = ({ title, children }) => {
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>{title}</h2>
      {children}
    </div>
  )
}

export default Container
