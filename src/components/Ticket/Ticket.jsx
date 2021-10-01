import React from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';

import Logo from '../../img/S7Logo.svg';
import classes from './Ticket.module.scss';

const Ticket = ({ price, segments }) => {
  const editPrice = (sum) => {
    const currentSum = String(sum);

    return `${currentSum.slice(0, 2)} ${currentSum.slice(2, currentSum.length)} Р`;
  };

  const travelTime = (duration) => `${Math.trunc(duration / 60)}ч ${duration % 60}м`;

  const flightTime = (date, duration) => {
    const time = new Date(date);
    const startTime = `${time.getHours()}:${time.getMinutes()}`;
    time.setMinutes(time.getMinutes() + duration);

    return `${startTime} - ${time.getHours()}:${time.getMinutes()}`;
  };

  return (
    <section className={classes.ticket}>
      <header className={classes.ticket__header}>
        <p className={classes['ticket__header--price']}>{editPrice(price)}</p>
        <img src={Logo} alt="S7 Logo" />
      </header>
      <section className={classes.ticket__details}>
        {segments.map(({ date, destination, duration, origin, stops }) => (
          <section className={classes.ticket__way} key={uniqid()}>
            <div>
              <p className={classes['ticket__way--headline']}>
                {destination} – {origin}
              </p>
              <p className={classes['ticket__way--info']}>{flightTime(date, duration)}</p>
            </div>
            <div>
              <p className={classes['ticket__way--headline']}>В пути</p>
              <p className={classes['ticket__way--info']}>{travelTime(duration)}</p>
            </div>
            <div className={classes['ticket__way--blokc-transfer']}>
              <p className={classes['ticket__way--headline']}>{stops.length} пересадка</p>
              <p className={classes['ticket__way--info']}>{stops.join(' ')}</p>
            </div>
          </section>
        ))}
      </section>
    </section>
  );
};

Ticket.propTypes = {
  price: PropTypes.number.isRequired,
  segments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Ticket;
