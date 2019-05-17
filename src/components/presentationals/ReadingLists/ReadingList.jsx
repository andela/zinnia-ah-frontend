import React from 'react';
import PropTypes from 'prop-types';
import { Item } from 'semantic-ui-react';

// components
import Title from '../Title/Title';

const ReadingList = ({ reads, type }) => {
  return (
    <div className="post-lists">
      {reads.length === 0 ? (
        <p
          style={{
            fontWeight: 'bolder',
            fontSize: '30px',
          }}
        >{`You have no ${type}`}</p>
      ) : (
        reads.map(read => (
          <Item.Group key={read.id}>
            <Item>
              <Item.Content>
                <Title
                  content={read.article.title}
                  className="title-article-lg"
                />
                <Item.Description
                  style={{
                    marginBottom: 'auto',
                  }}
                >
                  <p
                    style={{
                      fontSize: '1.125rem',
                      lineHeight: '1.375rem',
                      fontWeight: '200',
                    }}
                  >
                    {read.article.description}
                  </p>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        ))
      )}
    </div>
  );
};

ReadingList.propTypes = {
  reads: PropTypes.array,
  type: PropTypes.string,
};

export default ReadingList;
