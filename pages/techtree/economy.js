import cytoscape from 'cytoscape';
import React, { useEffect, useRef } from 'react';

import data from '../../techData/economyTechtree';
import styles from '../../styles/techtreeStyles';
import cssStyles from '../../styles/Techtree.module.css';

export default function App() {
  const containerRef = useRef();

  useEffect(() => {
    const dagre = require('cytoscape-dagre');
    cytoscape.use(dagre);

    const cy_for_rank = cytoscape({
      elements: data,
    });

    const pageRank = cy_for_rank.elements().pageRank();
    // elements들의 rank들입니다.
    const nodeMaxSize = styles.nodeMaxSize;
    const nodeMinSize = styles.nodeMinSize;
    const nodeActiveSize = styles.nodeActiveSize;
    const fontMaxSize = styles.fontMaxSize;
    const fontMinSize = styles.fontMinSize;
    const fontActiveSize = styles.fontActiveSize;
    // node & font 크기 값

    const edgeWidth = styles.edgeWidth;
    var edgeActiveWidth = styles.edgeActiveWidth;
    const arrowScale = styles.arrowScale;
    const arrowActiveScale = styles.arrowActiveScale;
    // edge & arrow 크기값

    const dimColor = styles.dimColor;
    const edgeColor = styles.edgeColor;
    const nodeColor = styles.nodeColor;
    const nodeActiveColor = styles.nodeActiveColor;

    const successorColor = styles.successorColor;
    // 상위 node & edge color
    const predecessorsColor = styles.predecessorsColor;
    // 하위 node & edge color

    const config = {
      container: containerRef.current, // container to render in
      elements: data,
      style: [
        // the stylesheet for the graph
        {
          selector: 'node',
          style: {
            'background-color': nodeColor,
            label: 'data(label)',
            width: function (ele) {
              return (
                nodeMaxSize * (pageRank.rank('#' + ele.id()) * 8) + nodeMinSize
              );
            },
            height: function (ele) {
              return (
                nodeMaxSize * (pageRank.rank('#' + ele.id()) * 8) + nodeMinSize
              );
            },
            'font-size': function (ele) {
              return fontMaxSize * pageRank.rank('#' + ele.id()) + fontMinSize;
            },
            color: nodeColor,
            'text-wrap': 'wrap',
          },
        },

        {
          selector: 'edge',
          style: {
            width: edgeWidth,
            'curve-style': 'bezier',
            'line-color': edgeColor,
            'target-arrow-color': edgeColor,
            'target-arrow-shape': 'vee',
            'arrow-scale': arrowScale,
          },
        },
      ],
      layout: {
        name: 'dagre',
        animate: false,
        gravityRangeCompound: 1.5,
        fit: true,
        tile: true,
      },
    };
    var cy = cytoscape(config);
    function setDimStyle(target_cy, style) {
      target_cy.nodes().forEach(function (target) {
        target.style(style);
      });
      target_cy.edges().forEach(function (target) {
        target.style(style);
      });
    }

    function setFocus(
      target_element,
      successorColor,
      predecessorsColor,
      edgeWidth,
      arrowScale,
    ) {
      target_element.style('background-color', nodeActiveColor);
      target_element.style('color', nodeColor);
      target_element.successors().each(function (e) {
        // 상위  엣지와 노드
        if (e.isEdge()) {
          e.style('width', edgeWidth);
          e.style('arrow-scale', arrowScale);
        }
        e.style('color', nodeColor);
        e.style('background-color', successorColor);
        e.style('line-color', successorColor);
        e.style('target-arrow-color', successorColor);
        setOpacityElement(e, 0.8);
      });
      target_element.predecessors().each(function (e) {
        // 하위 엣지와 노드
        if (e.isEdge()) {
          e.style('width', edgeWidth);
          e.style('arrow-scale', arrowScale);
        }
        e.style('color', nodeColor);
        e.style('background-color', predecessorsColor);
        e.style('line-color', predecessorsColor);
        e.style('target-arrow-color', predecessorsColor);
        setOpacityElement(e, 0.6);
      });
      target_element.neighborhood().each(function (e) {
        // 이웃한 엣지와 노드
        setOpacityElement(e, 1);
      });
      target_element.style(
        'width',
        Math.max(parseFloat(target_element.style('width')), nodeActiveSize),
      );
      target_element.style(
        'height',
        Math.max(parseFloat(target_element.style('height')), nodeActiveSize),
      );
      target_element.style(
        'font-size',
        Math.max(parseFloat(target_element.style('font-size')), fontActiveSize),
      );
    }

    function setOpacityElement(target_element, degree) {
      target_element.style('opacity', degree);
    }

    function setResetFocus(target_cy) {
      target_cy.nodes().forEach(function (target) {
        target.style('background-color', nodeColor);
        var rank = pageRank.rank(target);
        target.style('width', nodeMaxSize * (rank * 8) + nodeMinSize);
        target.style('height', nodeMaxSize * (rank * 8) + nodeMinSize);
        target.style('font-size', fontMaxSize * rank + fontMinSize);
        target.style('color', nodeColor);
        target.style('opacity', 1);
      });
      target_cy.edges().forEach(function (target) {
        target.style('line-color', edgeColor);
        target.style('target-arrow-color', edgeColor);
        target.style('width', edgeWidth);
        target.style('arrow-scale', arrowScale);
        target.style('opacity', 1);
      });
    }

    cy.on('tap', function (e) {
      const url = e.target.data('url');
      if (url && url !== '') {
        window.open(url);
      }
    });

    cy.on('tapstart mouseover', 'node', function (e) {
      setDimStyle(cy, {
        'background-color': dimColor,
        'line-color': dimColor,
        'target-arrow-color': dimColor,
        color: dimColor,
      });

      setFocus(
        e.target,
        successorColor,
        predecessorsColor,
        edgeActiveWidth,
        arrowActiveScale,
      );
    });

    cy.on('tapend mouseout', 'node', function (e) {
      setResetFocus(e.cy);
    });
  }, []);

  return (
    <div>
      <div className="rotate-alert">
        <div className="phone"></div>
        <div className="message">Please rotate your device!</div>
      </div>
      <div className="tree">
        <div ref={containerRef} style={{ height: '600px' }} />
        <div>contributors</div>
      </div>
    </div>
  );
}
