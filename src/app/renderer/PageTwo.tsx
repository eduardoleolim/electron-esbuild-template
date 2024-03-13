import React, { CSSProperties } from 'react';
import { Column, Row } from './shared/components/layouts';
import {
  Checkbox,
  ElevatedButton,
  FilledButton,
  FilledTonalButton,
  Icon,
  IconButton,
  OutlinedButton,
  Radio,
  TextButton
} from './shared/components/material3';

export function PageTwo() {
  const headerStyle: CSSProperties = {
    verticalAlign: 'middle'
  };

  const sectionStyle: CSSProperties = {
    marginTop: '20px',
    marginBottom: '20px',
    gap: 20,
    justifyContent: 'center'
  };

  return (
    <Column style={{ margin: '5%' }}>
      <Row style={headerStyle}>
        <IconButton href="#/">
          <Icon>arrow_back</Icon>
        </IconButton>
        <h1>Material Web components</h1>
      </Row>
      <Column>
        <h3>Buttons</h3>
        <Row style={sectionStyle}>
          <FilledButton>Click me!!</FilledButton>
          <FilledTonalButton>Click me!!</FilledTonalButton>
          <OutlinedButton>Click me!!</OutlinedButton>
          <ElevatedButton>Click me!!</ElevatedButton>
          <TextButton>Click me!!</TextButton>
        </Row>
      </Column>
      <Row style={sectionStyle}>
        <Column>
          <h3>Checkbox</h3>
          <Column style={sectionStyle}>
            <div>
              <Checkbox id="cbxCarrots" name="vegetables" value="carrots" />
              <label htmlFor="cbxCarrots">Carrots</label>
            </div>
            <div>
              <Checkbox id="cbxPeas" name="vegetables" value="peas" />
              <label htmlFor="cbxPeas">Peas</label>
            </div>
            <div>
              <Checkbox id="cbxPotatoes" name="vegetables" value="potatoes" />
              <label htmlFor="cbxPotatoes">Potatoes</label>
            </div>
          </Column>
        </Column>
        <Column>
          <h3>Radio</h3>
          <Column style={sectionStyle}>
            <div>
              <Radio id="carRadio" name="animals" value="Cat"></Radio>
              <label htmlFor="carRadio">Cats</label>
            </div>

            <div>
              <Radio id="dogRadio" name="animals" value="Dog"></Radio>
              <label htmlFor="dogRadio">Dogs</label>
            </div>

            <div>
              <Radio id="birdRadio" name="animals" value="Bird"></Radio>
              <label htmlFor="birdRadio">Birds</label>
            </div>
          </Column>
        </Column>
      </Row>
    </Column>
  );
}
