import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar/Avatar';
import { CharacterEntityVm } from '../character-collection.vm';
import * as classes from './character-card.styles';

interface Props {
  character: CharacterEntityVm;
  onDetails: (id: string) => void;
  onDelete: (id: string) => void;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onDetails, onDelete } = props;
  return (
    <Card onClick={() => onDetails(character.id)}>
      <CardActionArea>
        <CardHeader
          avatar={<Avatar aria-label="Character"></Avatar>}
          title={character.name}
          subheader={character.gender}
        />
        <CardContent>
          <div className={classes.content}>
            <CardMedia
              image={character.picture}
              title={character.name}
              style={{ height: 0, paddingTop: '56.25%', maxHeight: '100px' }}
            />
            <div>
              <div style={{ display: 'flex' }}>
                <Typography variant="subtitle1" gutterBottom>
                  Status:
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  {character.status}
                </Typography>
              </div>
              <div style={{ display: 'flex' }}>
                <Typography variant="subtitle1" gutterBottom>
                  Origin:
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  {character.origin}
                </Typography>
              </div>
            </div>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
