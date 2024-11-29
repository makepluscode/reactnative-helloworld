# React Native Desktop Hello World Widget

투명한 배경을 가진 드래그 가능한 Hello World 데스크톱 위젯입니다.

## 실행 화면 특징
- 프레임이 없는 투명한 창
- 드래그로 이동 가능
- 항상 최상위에 표시
- 크기 200x80 픽셀
- 둥근 모서리와 어두운 배경

## 시작하기

### 필수 요구사항

1. Windows 운영체제
2. Node.js LTS 버전
3. npm (Node.js와 함께 설치됨)

### Node.js 설치 방법

1. Windows PowerShell 관리자 권한으로 실행
2. Node.js LTS 설치:
```powershell
winget install OpenJS.NodeJS.LTS
```
3. 새 PowerShell 창을 열고 설치 확인:
```powershell
node --version
npm --version
```

### 프로젝트 실행

1. 프로젝트 클론:
```bash
git clone https://github.com/makepluscode/reactnative-helloworld.git
cd ReactHello
```

2. 의존성 패키지 설치:
```bash
npm install
```

3. 개발 모드 실행:
```bash
npm start
```

### 실행 파일 빌드

1. PowerShell을 관리자 권한으로 실행
2. 프로젝트 폴더로 이동
3. 빌드 실행:
```powershell
npm run build
```
4. `dist\win-unpacked` 폴더에서 `ReactHello.exe` 실행

## 문제 해결

### 일반적인 문제
- npm 명령어 인식 안됨: PowerShell/CMD 재시작
- 빌드 실패: 관리자 권한으로 다시 시도
- 위젯이 보이지 않음: 작업 관리자에서 프로세스 확인

### 패키지 설치 문제 해결
```bash
# node_modules 삭제
rd /s /q node_modules
# package-lock.json 삭제
del package-lock.json
# 의존성 다시 설치
npm install
```

## 기술 스택
- React 18
- Electron
- Webpack
- Babel

## 라이선스
MIT License

## 작성자
makepluscode@gmail.com

## 도움말
문제가 발생하면 이슈를 생성해주세요.
