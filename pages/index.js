import '../styles/Home.module.css';
import cytoscape from 'cytoscape';
import React, { useEffect, useRef, useState } from 'react';
import physicsData from '../techData/physicsTechtree';
import mathData from '../techData/mathTechtree';
import economicsData from '../techData/economicsTechtree';
import csData from '../techData/csTechtree';
import eeData from '../techData/electricalEngineeringTechtree';
import chemData from '../techData/chemTechtree';
import russiaData from '../techData/russiaTechtree';
import earthSystemData from '../techData/earthSystemTechtree';
import bioChemData from '../techData/bioChemTechtree';
import styles from '../styles/techtreeStyles';
import '../styles/Techtree.module.css';
// import Image from 'next/image' next10 에서 지원하는 요소

export default function App() {
  const containerRef = useRef();
  const [selected, setSelected] = useState(physicsData);
  const [graphicUI, setGraphicUI] = useState('dagre');
  const uiToolBox = { dagre: null, 'cose-bilkent': null };
  const SubjectBlock = ({ subjectName, iconSize, displayName }) => {
    return (
      <div
        onClick={() => {
          setSelected(physicsData);
          setGraphicUI('dagre');
        }}
        className="block"
      >
        <img src="/icons/physics.svg" alt="physics" height="70" width="70" />
        <br />
        {displayName}
      </div>
    );
  };

  useEffect(() => {
    const dagre = require('cytoscape-dagre');

    cytoscape.use(dagre);

    const cy_for_rank = cytoscape({
      elements: selected,
    });
    // rank를 활용하기 위해 data만 입력한 cytoscape 객체입니다

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
      elements: selected,
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
      //const label = e.target.data('label');
      //const modal = document.getElementsByClassName('modal');
      //modal.style('display', 'block');

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
  useEffect(() => {
    const dagre = require('cytoscape-dagre');
    const coseBilkent = require('cytoscape-cose-bilkent');
    uiToolBox['dagre'] = dagre;
    uiToolBox['cose-bilkent'] = coseBilkent;
    cytoscape.use(uiToolBox[graphicUI]);

    const cy_for_rank = cytoscape({
      elements: selected,
    });
    // rank를 활용하기 위해 data만 입력한 cytoscape 객체입니다

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
      elements: selected,
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
        name: graphicUI,
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
      //const label = e.target.data('label');
      //const modal = document.getElementsByClassName('modal');
      //modal.style('display', 'block');

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
  }, [selected, graphicUI]);

  return (
    <>
      <div className="rotate-alert">
        <div className="phone"></div>
        <div className="message">Please rotate your device!</div>
      </div>

      <div className="container">
        <main>
          <div className="tree">
            <div ref={containerRef} style={{ height: '600px' }} />
          </div>
        </main>
        <aside className="sidebar">
          <div
            onClick={() => {
              setSelected(physicsData);
              setGraphicUI('dagre');
            }}
            className="block"
          >
            <img
              src="/icons/physics.svg"
              alt="physics"
              height="70"
              width="70"
            />
            <br />
            Physics
          </div>

          <div
            onClick={() => {
              setSelected(mathData);
              setGraphicUI('dagre');
            }}
            className="block"
          >
            <img src="/icons/math.svg" height="70" width="70" />
            <br />
            Mathematics
          </div>

          <div
            onClick={() => {
              setSelected(economicsData);
              setGraphicUI('dagre');
            }}
            className="block"
          >
            <img src="/icons/economics.svg" height="70" width="70" />
            <br />
            economics
          </div>

          <div
            onClick={() => {
              setSelected(csData);
              setGraphicUI('dagre');
            }}
            className="block"
          >
            <img src="/icons/computer.svg" height="50" width="50" />
            <br />
            Computer Science
          </div>

          <div
            onClick={() => {
              setSelected(chemData);
              setGraphicUI('dagre');
            }}
            className="block"
          >
            <img src="/icons/chemistry.svg" height="70" width="70" />
            <br />
            Chemistry
          </div>

          <div
            onClick={() => {
              setSelected(bioChemData);
              setGraphicUI('dagre');
            }}
            className="block"
          >
            <img src="/icons/biochemistry.svg" height="70" width="70" />
            <br />
            Biochemistry
          </div>

          <div
            onClick={() => {
              setSelected(russiaData);
              setGraphicUI('dagre');
            }}
            className="block"
          >
            <img src="/icons/russia.svg" height="70" width="70" />
            <br />
            Russia
          </div>

          <div
            onClick={() => {
              setSelected(eeData);
              setGraphicUI('cose-bilkent');
            }}
            className="block"
          >
            <img src="/icons/electricity.svg" height="50" width="50" />
            <br />
            Electrical Engineering
          </div>

          <div
            onClick={() => {
              setSelected(earthSystemData);
              setGraphicUI('cose-bilkent');
            }}
            className="block"
          >
            <img src="/icons/earth.svg" height="70" width="70" />
            <br />
            Earth System
          </div>
        </aside>
      </div>
    </>
  );

}
