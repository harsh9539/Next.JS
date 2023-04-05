import Link from "next/link";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import DateIcon from "../icons/date-icon";
import Button from "../ui/button";
import classes from "./event-item.module.css"

function EventItem(props) {
  const { title, date, location, image, id } = props;
  const exploreLink = `/events/${id}`;


  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon/>
            <time>{date}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon/>
            <address>{location}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore</span>
            <span className={classes.icon}><ArrowRightIcon/>  </span>
          </Button>
        </div>
      </div>
    </li>
  )
}


export default EventItem;