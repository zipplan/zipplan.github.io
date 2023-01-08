---
layout: post
nav_order: 2
description: "Electric-Circuit 2 - Filters"
title: Filters
category: 
  - Electric Circuit
  - 전기회로
tags: 
  - Filters
  - LPF
  - HPF
permalink: docs/Electric-Circuit/2
use_math: true
grand_parent: Electronics
parent: Electric Circuit
date : 22/12/30
---

{% include toc %}

# 전자기 간섭 (EMI; electromagnetic interference)

전자회로를 설계하다 보면, 주변 장치에서 발생하는 전자기장에 의해 특정 위치에 원하지 않는 신호가 전달되기도 한다. 이러한 신호 잡음을 효과적으로 제거하는 회로가 필터이다. 필터는 원하는 목적을 달성하기 위해서 낮은 주파수의 신호만 사용하거나 높은 주파수의 신호만 사용하는 방식 등 다양하게 응용된다. 

# 수동필터와 능동필터

수동 필터와 능동 필터는 필터에 사용되는 소자에 따른 분류이다. RLC를 사용한 필터는 수동 필터, 트랜지스터나 OP AMP 등을 사용한 필터는 능동 필터로 구분한다. 수동필터는 이득이 1을 초과할 수 없지만 고주파수 대역에서 유용하게 쓸 수 있다. 가청주파수 대역 (300~3000Hz) 에서는 수동필터의 성능이 매우 떨어지고, 대용량의 인덕턴스, 커패시턴스가 요구되므로 능동필터가 주로 쓰인다. 

## 수동필터의 종류  
{% include modimg src="/images/472e0c939a280ea5ae26877e0564d3283b651d605fe6ff9f5482630675faa2b2.png" id="1" %}
낮은 주파수 대역을 사용할 지, 높은 주파수 대역을 사용할 지 등에 따라 필터의 종류가 달라진다. LPF와 HPF 에서는 "차단주파수" ( 또는 "3-dB 주파수", "반전력주파수" 등으로 불림)와 "저지주파수"라는 개념이 사용된다. "차단주파수"는 입력 대비 출력이 반으로 감소하는 주파수이고, "저지주파수"는 입력 대비 출력이 0에 근접하는 주파수를 의미한다. 

## 수동필터의 설계  
{% include modimg src="/images/b2c1dbe19cf162bba3dc09adb959bf8441dc56ea85b62125901f62eb90dbfb5c.png" id="2" %}

### Passive LPF
{% include modimg src="/images/9cf5ae8293a2ca1b988d904b12b04abaf8892424c0d855fa3f850125e7c05f46.png" id="3" %}

### Passive HPF
{% include modimg src="/images/4b4369b8aa837f21de29c17b09aa2e7d730ecb4df5066fee95a12caca05f0747.png" id="4" %}

### Passive Band Pass Filter
{% include modimg src="/images/c1eb714f5b4310cab278dae7a0d725c90f943b799336dabce00ab69cd829ecbd.png" id="5" %}

### Passive Band Stop Filter
{% include modimg src="/images/e8d31800fbc461fcfda2c4abcab317c70122327b85dda911789a2dbb22a205a3.png" id="6" %}

{% include AdMid %}

## 능동필터의 종류
### Active LPF
{% include modimg src="/images/b0da1b38b76d5cf26da977f0ef733e7023d15bd0c590b0a974abf97c21bd87a5.png" id="8" %}

### Active HPF
{% include modimg src="/images/e67c4df0ccc69f1549b5c27f4afce4e3b5cf458916939fa5cb304974160f753c.png" id="9" %}

### Active Band Pass Filter
{% include modimg src="/images/5906e8b1a5e8743359ec7c8b0a3fa64ff9e8fd77b13d281d74de4bb95c7a36d1.png" id="10" %}

### Active Band Reject (Notch) Filter
{% include modimg src="/images/ebcbdc7c0132e261b70da309741e014a09570a8c36538675a2acc5547dbccf8b.png" id="11" %}

# Trade Off
필터는 노이즈를 제거하지만, 모든 일이 그렇듯 너무 과도하면 부작용이 있기 마련이다. 필터의 시정수가 커지면 노이즈 제거 성능은 높아지지만, 전압이나 전류나 전압이 원하는 레벨에 도달할 때까지의 시간이 늘어나게 된다. 따라서, 설계에 필터를 적용할 때에는 통과 대역폭 뿐만 아니라 응답시간도 고려할 필요가 있다.

