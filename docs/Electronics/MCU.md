---
layout: page
nav_order: 3
description: "Micro Controller Unit"
title: MCU
has_children: true
category: 
  - MCU
  - Firmware
tags: 
  - Intro
permalink: docs/MCU
use_math: true
parent: Electronics
---

최근 전자 제품들은 점점 더 똑똑해지고, 작고 가벼워지며 혁신을 거듭하고 있는 듯하다. 그 중심에는 MCU와 MCU와 결합하여 여러가지 기능을 지원하는 펌웨어가 있다. MCU (마이크로컨트롤러)는 내부에 많은 주변장치와 함께 CPU 코어, 메모리 등을 모두 포함하고 있는 소형 컴퓨터라고 생각하면 된다. 소형이다 보니 작은 메모리로도 MCU와 연결된 모든 회로를 보호하고 제어할 수 있도록 간결하고 효율적이게 코드를 작성해야 한다. 메모리를 절약하는 것이 중요하기 때문에 불필요한 변수 선언을 지양해야 한다. 

임베디드 소프트웨어는 보통 무한 루프를 일정 주기로 수행하도록 구성되어 있기 때문에 정해진 주기 안에 모든 작업이 수행되어야 한다. 예를 들어서, 주기가 1초라면 1번 반복되어야 하는 코드가 모두 1초 이내에 종료가 되는 것이 보장되어야 한다. MCU용 펌웨어는 주로 C 언어로 작성되므로, 한 주기 이내에 함수가 모두 수행되지 못하고 종료되면 C 언어는 메모리를 자동으로 정리하지 않으므로 오동작이 발생할 우려가 있다. 

향후 작성되는 글에서는 아주 기초적인 부분부터 다뤄볼 예정이다. 사실, 코딩이 낯선 사람들은 알겠지만 메모리 등을 효과적으로 사용하는 방법, 에러를 최소화하는 방법 들은 쉽게 와닿지 않는다. 이는 기초가 부족하기 때문이다.

차량용 Embedded SW를 개발할 때 MCU에 대해 잘 모르더라도 HW 지식과  기본적인 코딩 실력만 있으면 ASW 개발에는 문제가 없을 수도 있다. 하지만, 현장에서는 어떤 문제가 발생할지 모르고, 실제로 코드 개발시 깊게 접근하게 되면 ASW 담당자도 결국 MCU에 대한 이해 없이는 한계가 있다는 것을 알게될 것이다. 따라서 앞으로의 포스트들은 무엇하나 쉽게 다루고 넘어가지 않고 천천히 들여다 보는 방식으로 작성될 것이다.