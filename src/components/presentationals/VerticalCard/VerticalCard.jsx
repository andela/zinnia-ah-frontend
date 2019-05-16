import React from 'react';

import { Card, Icon, Image } from 'semantic-ui-react';
import PopularAuthorItem from '../PopularAuthorItem/PopularAuthorItem';

// components

// styles
import './VerticalCard.scss';
import Title from '../Title/Title';
import Button from '../Button/Button';

const VerticalCard = () => (
  <Card>
    <Image
      src="https://res.cloudinary.com/nedy123/image/upload/v1531499318/mbppkzeehprspnbbcym8.png"
      wrapped
      ui={false}
    />
    <Card.Content>
      <Card.Header>
        <Title content="City of France" className="title-avg" />
        <Button
          className="btn-transparent"
          type="button"
          value={
            <Icon
              name="bookmark outline"
              style={{
                fontSize: '1.8rem',
                margin: '0',
              }}
            />
          }
        />
      </Card.Header>
      <Card.Description>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected.
      </Card.Description>
    </Card.Content>
    <div className="card-footer">
      <PopularAuthorItem
        key={'uiojklnmkopiuygh'}
        name={'ebenezer'}
        url={'notontwitter.com'}
        image={''}
        username={'eben'}
      />
    </div>
  </Card>
);

export default VerticalCard;
