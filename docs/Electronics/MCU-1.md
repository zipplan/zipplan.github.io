---
layout: post
nav_order: 1
description: "MCU Firmware Filetypes"
title: MCU Firmware Filetypes
category: 
  - MCU
tags: 
  - Filetype
permalink: docs/MCU/1
grand_parent: Electronics
parent: MCU
date : 22/12/30
---

{% include toc %}

펌웨어는 MCU 등 하드웨어와 결합되는 소프트웨어를 말한다. 펌웨어를 통해 MCU 의 주변장치 및 연결된 모든 회로를 제어할 수 있다. 어떤 파일 형식이든 모두 이진수로 이뤄진 데이터 파일이지만, bin 파일과 다르게 hex, s19(srec) 파일 형식은 일정한 양식을 따르기 때문에 메모리의 어느 주소값에 어떤 데이터가 덮어 씌워져야 하는 지 등의 정보가 담겨져 있다. 반면, bin 파일은 단순히 데이터만 포함된 것이라고 보면 된다. 

MCU의 Flash Memory에 데이터가 새롭게 Reprogram (혹은 Flash) 되는 것이 어느 의미가 있는지 이해하기 어려울 수도 있다고 생각된다. 이러한 부분은 MCU의 동작 메커니즘 및 hex파일의 구조를 이해하고 나면 개선될 수 있다. 본인도 처음 hex파일을 접했을 때, hex파일을 메모장으로 열어 보고는 당황했던 기억이 있다.

# MCU 구조

MCU 내부에는 CPU 및 데이터 저장을 위한 nvSRAM (Non-Volatile SRAM), NCM (Non-Correctable-Memory), Flash Memory, 타이머, ADC/DAC 모듈 등이 존재한다. 펌웨어는 Flash Memory에 설치된다. 펌웨어의 주된 역할은 ADC에 의해 디지털 데이터로 변환된 값을 적절하게 변환하고, 변환된 데이터를 기반으로 적절한 역할을 수행할 수 있도록 제어하는 것이다. 이 때, Interrupt 와 타이머 모듈 등을 이용하여 HW를 손상시킬 수 있는 상황을 감지하여 작동을 중지하는 등의 고장진단 로직도 사용할 수 있다. 

{% include modimg src="/images/6ec634663cc575e4728de60fc62379f4980ff9d493fbbaca6ce528a2c128fb50.png" id="1" width="auto" %}  

# 메모리

CPU가 메모리에 접근하기 위해서는 가상 주소가 필요하다. 하지만, 프로그래는 메모리에 접근할 때 물리적인 주소를 사용하기 때문에 CPU는 이 메모리에 접근하기 위해서 MMU가 필요하다. MMU는 물리주소를 가상 주소(논리적인 주소)로 변환해준다. MMU 를 사용하면 물리적 주소를 가상 주소로 변환하는데 더불어서 데이터가 메모리 상에서 실제로는 떨어져 있더라도 MMU를 거치면 하나로 표현할 수 있다는 장점이 있다. 위 메모리 맵은 물리적인 주소로 작성된 표로 프로그래머가 맵을 참조해서 #pragma section 지시자로 특정 변수가 특정 위치에 위치하도록 적절히 설정할 수 있다. 예를 들어서, 매번 Flash가 되더라도 데이터를 영구적으로 남기고 싶다면 별도의 비휘발성 메모리인 nvSRAM에 그 데이터를 저장할 수 있다.

{% include AdMid %}

# Intel hex (*.hex) vs SREC

Intel hex 라는 이름은 Intel Processor 들을 위한 펌웨어라는 의미로 사용된다. Intel 프로세서는 리틀 엔디안을 기반으로 하기 때문에, Intel hex 파일 포맷을 사용하여야 한다. 만약, 프로세서가 빅 엔디안 형식이라면 SREC(Motorola S-record) 을 사용해야 할 것이다. 사실 hex, srec 이외에 다른 파일 형식도 많기 때문에 무조건 맞는 말은 아니지만 hex와 srec 형식은 가장 흔한 형식으로 어느 정도는 맞는 말이다. 

MCU의 사양에 따라 펌웨어의 형식이 달라져서 헷갈릴 수 있는데, 사실 이 부분은 MCU 제조사에서 권장하는 컴파일러를 사용하면 MCU에 맞는 펌웨어로 자동으로 만들어낸다. (Ex :NXP 사 - Diab Compiler, Inifineon 사 - Tasking VX-toolset) 

# Intel HEX 구조

{% include modimg src="/images/7b790391dd7cede1f986a2cdc9c3b83fe3b4adb7dd9dd7ba8737f71c02b43d1e.png" id="2" width="auto" %}  

## Hex Code 00 (Data) : 16/32 비트 어드레스 방식에 사용

코드에서 #pragma 지시자를 사용하면 상수 데이터가 Memory 에 적절히 배치된다. 링커는 Intel HEX문법에 따라 #pragma section 로 정의된 내용을 Intel HEX 파일 형식으로 재배치한다. 여기서, 데이터란 단순 데이터에 해당하는 값들로 상수를 의미한다. 

## Hex Code 01 (End Of File) : 16/32 비트 어드레스 방식에 사용

단순히 문서의 파일의 끝을 의미한다.

## Hex Code 02 (Extended Segment Address) : 16 비트에 어드레스 방식에 사용

Logical Address는 02 의 세그먼트 주소와 데이터의 주소를 더한 값으로 설정된다. 
Ex) Logical Address = Segment (1200) + 데이터 (FFFF) = 111FF

## Hex Code 03 (Start Segment Address) : 16 비트에 어드레스 방식에 사용

데이터에서 앞 2바이트는 CS (Code Segment), 뒤 2 바이트는 IP (Instruction Pointer) 를 의미한다. 

## Hex Code 04 (Extended Linear Address) : 32 비트에 어드레스 방식에 사용

Logical Address는 04의 주소에 $2^16$을 곱한 주소(혹은 16비트만큼 좌측으로 비트 쉬프트)와 데이터의 주소를 더한 값으로 설정된다.
Ex) Logical Address = (Segment (1200) << 16) + 데이터 (FFFF) = 1200FFFF

## Hex Code 05 (Start Linear Address) : 32 비트에 어드레스 방식에 사용

EIP 레지스터의 값을 지정한다. EIP (Extended Instruction Pointer, 32 bit IP) 레지스터는 다음 수행해야 할 명령어가 저장될 공간을 저장하는 공간이다. EIP 를 지정함으로써 동작을 제어할 수 있다.

# [SREC 구조](https://en.wikipedia.org/wiki/SREC_(file_format))

필요시 작성
