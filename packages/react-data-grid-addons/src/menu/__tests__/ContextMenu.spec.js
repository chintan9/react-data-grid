import React from 'react';
import { ContextMenu } from 'react-contextmenu';
import TestUtils from 'react-dom/test-utils';

import ReactDataGridContextMenu from '../ContextMenu';

describe('Context Menu', () => {
  let component = {};

  beforeEach(() => {
    component = TestUtils.renderIntoDocument(<ReactDataGridContextMenu />);
  });

  it('should create a new ContextMenu instance', () => {
    expect(component).toBeDefined();
  });

  it('should have "reactDataGridContextMenu" as identifier', () => {
    const contextMenu = TestUtils.findRenderedComponentWithType(component, ContextMenu);
    expect(contextMenu.props.identifier).toEqual('reactDataGridContextMenu');
  });
});