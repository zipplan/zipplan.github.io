---
layout: post
nav_order: 1
description: "Electric-Circuit 1 - What is impedance?"
title: Impedance & Phasor
category: 
  - Electric Circuit
  - 전기회로
tags: 
  - Impedance
  - Phasor
permalink: docs/Electric-Circuit/1
grand_parent: Electronics
parent: Electric Circuit
date : 22/12/30
---

{% include toc %}

# 리액턴스와 복소수 좌표계
{% include modimg src="/images/230e0a188262afb0f667fda863a206ebda85b9acf9582d0de9a6aad4e4bc4075.png" id="1" width="50%" %}

유도성 리액턴스는 wL, 용량성 리액턴스는 $1 \over wC$ 로 표현된다. w는 각주파수를 의미하는데, w는 2πf 이므로 리액턴스는 주파수에 따라 변동한다는 것을 알 수 있다. 복소수 좌표계는 임피던스를 나타내기 위한 좌표계로 사용되는데, 임피던스가 Z = $ R + jX $ 로 표현된다는 점을 생각해보면 이해가 된다. 여기서 X 는 총 리액턴스로 유도성 리액턴스와 용량성 리액턴스를 합한 값이다. 위 그림에서 확인할 수 있듯, 용량성 리액턴스는 90도 뒤지고 용량성 리액턴스는 90도 앞선다는 것을 알 수 있다.

# 페이저

교류전원의 전압 역시 페이저로 표현되기도 한다. 페이저로 표현된 전압식을 임피던스로 나누어주면 전류를 쉽게 구할 수 있다. 위상각은 φ 로 표현되고, 0~2π로 표현하거나 -π ~ π로 표현하기도 한다.

{% include modimg src="/images/cdd2dd113f330f38d9f57e373781505081e274382df07f37412a3c8d42e8f984.png" id="2" width="50%" %}

# 리액턴스

리액턴스란 용어의 사전적 뜻은 반응을 보이는 정도를 의미한다. 전기에 있어서도 리액턴스의 의미는 변하지 않는다. 유도성 리액턱스는 인덕터에 의한 것이고, 용량성 리액턴스는 커패시터에 의한 것이다. 인덕터는 전기에너지를 자기장의 형태로 저장하는 장치이고, 커패시터는 전기에너지를 전기장의 형태로 저장한다. 에너지를 변환하는 과정에서 위상의 변화가 발생하고 이러한 특성을 이용해서 여러가지 응용회로가 개발되었다.

{% include modimg src="/images/508ae062d2345ea26998e8db7d022d0d18de1853416b6d31ad33157ef4bc46c6.png" id="3" width="50%" %}

{% include AdMid %}

# 저항 V-I 관계

저항은 아래와 같이 전압과 전류가 동일한 위상을 가진다.

{% include modimg src="/images/9cc6abb899377b8a24143e5cea6d2650b2c491ca05a8b5ad2a813cae0424e2d9.png" id="4" %}

# 인덕터V-I 관계

인덕터는 전류가 전압보다 위상이 $pi \over  2$ 만큼 뒤진다.

{% include modimg src="/images/44ab9c05785e5d81ddb394a10f6081fd74631ddbc979ee0fac706e9f5413dea9.png" id="5" %}

# 커패시터 V-I 관계

커패시터는 전압이 전류보다 위상이 $pi \over  2$ 만큼 뒤진다.

{% include modimg src="/images/0f07e37d79b7e39f41bf353a942f2fbb7089d1ff64ca32691698b08e49a38ae1.png" id="6" %}
