---
layout: post
nav_order: 4
description: "Electric-Circuit 4 - RLC Circuit (Transient Analysis)"
title: RLC Circuit (Transient Analysis)
category: 
  - Electric Circuit
  - 전기회로
tags: 
  - Passive Element
  - RLC Circuit
permalink: docs/Electric-Circuit/4
grand_parent: Electronics
parent: Electric Circuit
date : 22/12/30
---

{% include toc %}

RLC는 그 수동소자이기 때문에 RLC만으로 이루어진 회로는 아무런 작동을 하지 못한다. 이번 포스트에서는 접압원과 RLC를 활용한 간단한 회로를 소개하려고 한다. RC 회로, RL회로, RLC 회로를 소개한다.

# [임피던스]({% link docs/Electronics/Electronics-Circuit-1.md %})

RLC 회로를 살펴보기 전 임피던스에 대해 잘 이해하고 넘어가야 한다. 임피던스를 이해하기 위해서는 먼저 리액턴스의 개념을 잘 이해하고 있어야 한다. 리액턴스란 말 그대로 반응이라는 뜻이다. 순수 저항은 저항만으로 이루어져있고, 커패시터와 인덕터는 각각 용량성 리액턴스 $1 \over wC$, 인덕터는 유도성 리액턴스 wL 을 가진다. 여기서 w는 각속도로 2πf 를 의미한다. 즉, 리액턴스는 주파수에 비례하는 값으로 고주파일 수록 유도성 리액턴스의 영향은 커지고 용량성 리액턴스의 영향은 작아진다. 정리하면, 고주파인 경우 유도성 리액턴스는 ∞ 로 보이고 저주파인 경우 유도성 리액턴스가 ∞ 로 보이게 된다. 

# RC 회로

RC회로는 사실 RC 단독으로는 큰 의미가 없고, 다른 회로와 함께 응용될 때 그 의미가 있다. 그래도 커패시터의 충방전 메커니즘을 이해하는 데는 도움이 되는 회로이다. 아래 회로에서 접점이 a 로 연결되면 v에 의해서 C가 충전되고, b 로 연결되면 R 에 의해서 C가 방전된다.  

{% include modimg src="/images/0aeaf5d7daf7197aae542457825944dea0cc02aa63db49fec44e8274e07aa0ed.png" id="1" width="auto" %}  

커패시터는 충전 방향과 방전 방향이 서로 반대이다. 아래 그림을 참조하면 충전중과 방전중 전자의 흐름이 반대임을 알 수 있다. 전류의 방향은 전자의 이동방향의 반대이다.  

{% include modimg src="/images/7f65df145e087dfba67758daeea3efbeb654b682c8f77e3ac0fe69f88fad1d54.png" id="2" width="auto" %}  

위는 V = 100, R = 1MΩ, C = 1uF 이라고 설정했을 때의 그래프이다. RC회로는 통상 5τ 충전하면 커패시터가 완전 충전된다고 생각하면 되고, 5τ 방전하면 커패시터가 거의 완전 방전된다고 생각하면 된다. (τ = RC, 단위 초) 완충시 전류는 더 이상 흐르지 않지만, 전압은 일정하게 유지된다.

{% include modimg src="/images/bf472f48d65253ceac0eeb49d8a69a8d899d6b417bf1e0d3c4c5200dfa71bb69.png" id="3" width="auto" alt="충전시" %}  

{% include modimg src="/images/6aaa7c15d8133c78f701bedce9542a29006e5e0c00ad9ffbf4e78c94ab3908e3.png" id="4" width="auto" alt="방전시" %}  

{% include modimg src="/images/3cc89c5c5fd56d5ed2ed445625367a1de539bb791014fa88b15420ab861a6929.png" id="5" width="auto" alt="https://www.electronics-tutorials.ws/rc/rc_1.html" %}  

{% include AdMid %}

## 충전 공식  
{% include modimg src="/images/2c9df0030584bd940354d172ed031e2f746e6e1c0f606806ff76de8a9f568806.png" id="6" width="auto" %}  

## 방전 공식  
{% include modimg src="/images/ae62100dfb5b5ca8737e4ad3f3e723c59b54be7b6ca58df3159b0fe8d69c51f5.png" id="7" width="auto" %}  

# RL 회로

인덕터는 순간적인 고주파 성분을 억제하기 위해 사용한다. 아래 회로를 보도록 하자.

인덕터 역시 5τ 충전하면 완전히 충전되고, 5τ 방전하면 완전히 방전된다. 완충시, 전류는 계속해서 흐르지만 전압은 0이 된다.

위 그림에서 파란극은 S극이고, 빨간극은 N극이다. 아래와 같이, 자기력선은 N극에서 시작하여 S극에서 끝나므로, 위 그림에서 막대자석이 코일에 가까워지면 자속이 왼쪽에서 오른쪽 방향으로 증가하므로 전압은 패러데이의 법칙에 따라 자속이 증가하는 반대 방향으로 전압이 생성된다. 위 그림을 보면 멀티미터의 선이 빨간 쪽이 + 쪽이고, 까만 선이 - 쪽 단자이다. 

렌츠의 법칙에 따라서 기전력은 자속이 증가하는 것을 막는 방향쪽으로 생성된다. 그 크기는 패러데이의 법칙에 따라 자속의 변화량을 통해 알 수 있다. 전자기 유도 현상은 작용-반작용 현상의 일종이다. 위 그림에서 막대자석이 N극 쪽을 코일쪽으로 가져다대면 코일이 마치 막대자석이 가까이 오는 것을 방해하는 것처럼 내부에 자기장이 형성된다. 도선에 흐르는 전류의 방향은 아래와 같이 오른 나사의 법칙을 통해 알 수 있다.

{% include modimg src="/images/11ff01552aaa1f9ec31791cbec3736bddeb2b65314a8449eb9e6b59e0d826a5d.png" id="8" width="auto" alt="오른 나사 법칙" %}  

{% include modimg src="/images/1694b02b3aedee858c9a5ad79007870e279cee37ab94b4d477fb7c07b29f5b3e.png" id="9" width="auto" alt="자기력선의 방향 (N->S)" %}  

참고로, RC회로 및 RL 회로 등은 주파수 응답을 해석해보면 필터로도 사용할 수 있는데, 이는 이후에 다뤄보기로 하겠다. 

# 커패시터의 전압 연속성 & 인덕터의 전류 연속성

이제 커패시터는 전압은 연속적이고, 인덕터는 전류가 연속적이라는 것을 알게 되었다. 여기서 중요한 것은 커패시터는 방전시 전하의 이동방향이 반전되어 전류의 흐름이 충전전류의 방향과 반대가 되고, 인덕터는 방전시 렌츠의 법칙에 의해서 자속이 변화하는 방향의 반대로 곧바로 전압이 걸리게 된다.

전압 연속성 덕분에 전력전자에서는 빠른 주기로 스위칭하는 회로에 커패시터를 삽입하여 전압을 일정하게 유지하는 데 사용하고, 전류 연속성을 이용해서 전류를 일정하게 유지하기 위해 인덕터를 사용한다.

# LC 회로 (RLC) - 병렬회로

커패시터는 유전체에 전압이 걸려서 분극이 포화될 때까지 충전을 계속한다. 커패시터가 완전히 충전되면 유전체 내부 전기장은 일정하게 유지되고, 더 이상 전류는 흐르지 않는다. 인덕터는 전류가 흘르면 자기 포화현상이 일어날 때까지 충전된다. 자기 포화현상이 일어나면 인덕터 내부에는 자속의 변화가 없으므로 인덕터는 순수 도선처럼 동작하며 인덕터 양단의 전압이 0V가 된다. 하지만, 커패시터나 인덕터 어느 쪽에서라도 전속이나 자속이 누설되면 이 평형상태가 깨져서 전압과 전류가 진동하게 된다. 

{% include modimg src="/images/6e32cc3399c38addf0fea7868b5cba12178deb48ff35ce8d536647e71491da4c.png" id="10" width="auto" alt="https://en.wikipedia.org/wiki/LC_circuit" %}  

아래와 같은 RLC 병렬회로를 고려해보자.  
{% include modimg src="/images/77c794580ad39789c45cad69b3ac9fc60792e29d8e122ca3caeeab312c2e627d.png" id="11" width="auto" %}  

위와 같은 LC 회로를 구성할 때, 주의할 점은 공명(또는 공진 또는 Resonance) 현상이다. 용량성 리액턴스는 1/wC로 표현되고, 유도성 리액턴스는 wL로 표현된다. 여기서 주의할 점은 용량성 리액턴스는 주파수 반비례이고, 유도성 리액턴스는 주파수 비례라는 것과, 임피던스 계산시 용량성 리액턴스는 유도성 리액턴스를 상쇄시키는 방향이라는 것이다. 따라서, 특정 주파수에서는 주파수가 0이 될 수 있다. 이 주파수가 바로 공진주파수이다. 

{% include modimg src="/images/f77dfb5a54743c83620e19ac387478290e70586d2482844a68280b3df52bd569.png" id="12" width="auto" %}  

공진주파수에서는 낮은 임피던스를 갖기 때문에 순간적으로 전류의 진폭이 증가한다.

# LC 회로 (RLC) - 직렬회로

직렬회로는 공진주파수에서 오히려 임피던스가 무한대로 발산한다는 점이 다르다. 공진주파수에서는 개방회로로 동작한다.




